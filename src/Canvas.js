class Canvas {
    constructor(game) {
        this.game = game;
        this.tileSize = 64;
        this.c=document.getElementById("canvas");
        this.ctx = this.c.getContext("2d");
        this.setDimensions();
    }

    getPlayableAreaDimensions() {
        var map = this.game.level.map.map,
            height = map.length * this.tileSize,
            width = map[0].length * this.tileSize

        return {
            width: width,
            height: height
        }
    }

    getLeftPadding() {
        return this.c.width / 2 - this.getPlayableAreaDimensions().width / 2;
    }

    getTopPadding() {
        return this.c.height / 2 - this.getPlayableAreaDimensions().height / 2;
    }

    setDimensions() {
        this.c.height = this.c.clientHeight;
        this.c.width = this.c.clientWidth;
        this.tileSize = 64;

        if (
            this.getPlayableAreaDimensions().width > this.c.width
            || this.getPlayableAreaDimensions().height > this.c.height
        ) {
            var map = this.game.level.map.map,
                heightTiles = map.length,
                widthTiles = map[0].length,
                newWidth = this.c.width / widthTiles,
                newHeight = this.c.height / heightTiles;

                if (newHeight < newWidth && newHeight < this.tileSize) {
                    this.tileSize = Math.floor(newHeight);
                } else if (newWidth < this.tileSize) {
                    this.tileSize = Math.floor(newWidth);
                }
        }
    }

    drawFrame() {
        this.drawLevel();
        this.drawPlayer();
    }

    drawLevel() {
        this.drawBackground();
        this.drawMap();
        this.drawExits();
        this.drawPushBlockHomes();
        this.drawLasers();
        this.drawPushBlocks();
    }

    drawBackground() {
        this.ctx.fillStyle = this.game.tiles.getByID('map', 1).colour;
        this.ctx.fillRect(
            0,
            0,
            this.c.clientWidth, 
            this.c.clientHeight
        );
    }

    drawPlayer() {
        // #todo #idea Animation class could contain methods that create range loops based on game tick to animate player shape.
        var playerTile = this.game.tiles.getPlayerTile(),
            top = this.game.player.position.row * this.tileSize,
            left = this.game.player.position.cell * this.tileSize;

        this.drawTile(playerTile.colour, top, left);
    }

    drawMap() {
        var map = this.game.level.map;
        for (var rowCount = 0; rowCount < map.map.length; rowCount++) {
            var row = map.map[rowCount];
            for (var cellCount = 0; cellCount < row.length; cellCount++) {
                var mapTileID = row[cellCount];
                this.drawMapTile(mapTileID, rowCount, cellCount);
            }
        }
    }

    drawLevelComplete() {
        var timer = this.game.timer.count('levelComplete', 1000);

        if (timer.completed === true) {
            return true;
        }

        this.ctx.fillStyle = 'rgba(255, 255, 255, ' + timer.elapsedPercent / 100 + ')';
        this.ctx.fillRect(
            0,
            0,
            this.c.clientWidth, 
            this.c.clientHeight
        );
    }

    drawLevelBegin() {
        var timer = this.game.timer.count('levelBegin', 1000);

        if (timer.completed === true) {
            return true;
        }

        this.ctx.fillStyle = 'rgba(255, 255, 255, ' + timer.remainingPercent / 100 + ')';
        this.ctx.fillRect(
            0,
            0,
            this.c.clientWidth, 
            this.c.clientHeight
        );
    }

    drawPushBlocks() {
        for (let pushBlock of this.game.pushBlocks.list) {
            var top = pushBlock.row * this.tileSize,
                left = pushBlock.cell * this.tileSize;

            switch (pushBlock.tile.name) {
                case 'laser':
                    var direction = 'down';
                    switch (pushBlock.orientation) {
                        case 0:
                            direction = 'down';
                            break;
                        case 90:
                            direction = 'left';
                            break;
                        case 180:
                            direction = 'up';
                            break;
                        case 270:
                            direction = 'right';
                            break;
                    }
                    this.drawLaserEmitter(pushBlock.tile.colour, top, left, direction);
                    break;
                case 'laserCapture':
                    this.drawLaserCapture(pushBlock.tile.colour, top, left, pushBlock.active);
                    break;
                default:
                    this.drawTile(pushBlock.tile.colour, top, left);
                    break;
            }
        }
    }

    drawPushBlockHomes() {
        if (
            this.game.level.map.interactables === undefined
            || this.game.level.map.interactables.pushBlockHomes === undefined
        ) {
            return false;
        }
        for (let pushBlockHome of this.game.level.map.interactables.pushBlockHomes) {
            var top = pushBlockHome.position.row * this.tileSize,
                left = pushBlockHome.position.cell * this.tileSize,
                colour = this.game.tiles.pushBlockHomeTiles[0].colour;
            this.drawTileOutline(colour, top, left);
        }
    }

    drawExits() {
        for (let exit of this.game.level.map.interactables.exits) {
            var top = exit.position.row * this.tileSize,
                left = exit.position.cell * this.tileSize,
                colour = this.game.exit.tile.colour;
            this.drawTileOutline(colour, top, left);
        }
    }

    drawLasers() {
        this.drawLaserEmitters();
        this.drawLaserLines();
    }

    drawLaserLines() {
        for (let laser of this.game.laser.lasers) {
            this.drawTileLine(laser.direction, this.tileSize / 11, this.getLaserColour(), laser.row * this.tileSize, laser.cell * this.tileSize);
        }
    }

    drawLaserEmitters() {
        if (
            this.game.level.map.interactables === undefined
            || this.game.level.map.interactables.laserEmitters === undefined
        ) {
            return false;
        }
        for (let laserEmitter of this.game.level.map.interactables.laserEmitters) {
            var top = laserEmitter.position.row * this.tileSize,
                left = laserEmitter.position.cell * this.tileSize,
                tile = this.game.tiles.laserTiles[0];

            this.drawLaserEmitter(tile.colour, top, left, laserEmitter.direction);
        }
    }

    tileSizePercent(percentage) {
        return  percentage / 100 * this.tileSize;
    }

    drawLaserCapture(colour, top, left, active) {
        top += this.getTopPadding();
        left += this.getLeftPadding();
        this.ctx.fillStyle = this.getLaserColour();

        if (active === true) {
            this.ctx.beginPath();
            this.ctx.moveTo(left + this.tileSizePercent(50), top + this.tileSizePercent(35));
            this.ctx.lineTo(left + this.tileSizePercent(65), top + this.tileSizePercent(50));
            this.ctx.lineTo(left + this.tileSizePercent(50), top + this.tileSizePercent(65));
            this.ctx.lineTo(left + this.tileSizePercent(35), top + this.tileSizePercent(50));
            this.ctx.fill();
        }
        
        this.ctx.fillStyle = colour;

        this.ctx.beginPath();
        this.ctx.moveTo(left, top);
        this.ctx.lineTo(left + this.tileSizePercent(80), top);
        this.ctx.lineTo(left, top + this.tileSizePercent(80));
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.moveTo(left + this.tileSize, top);
        this.ctx.lineTo(left + this.tileSizePercent(20), top);
        this.ctx.lineTo(left + this.tileSize, top + this.tileSizePercent(80));
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.moveTo(left, top + this.tileSize);
        this.ctx.lineTo(left + this.tileSizePercent(80), top + this.tileSize);
        this.ctx.lineTo(left, top + this.tileSizePercent(20));
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.moveTo(left + this.tileSize, top + this.tileSize);
        this.ctx.lineTo(left + this.tileSizePercent(20), top + this.tileSize);
        this.ctx.lineTo(left + this.tileSize, top + this.tileSizePercent(20));
        this.ctx.fill();
    }

    getLaserColour() {
        var timer = this.game.timer.count('laserColour', 1000, true),
            opacity = timer.elapsedPercent / 100;

        opacity = 0.5 + opacity / 6;

        return 'rgba(204, 0, 0, ' + opacity + ')';
    }

    drawLaserEmitter(colour, top, left, direction) {
        top += this.getTopPadding();
        left += this.getLeftPadding();

        switch(direction) {
            case 'up':
                this.ctx.fillStyle = this.getLaserColour();
                this.ctx.beginPath();
                this.ctx.moveTo(left + this.tileSizePercent(33), top);
                this.ctx.lineTo(left + this.tileSizePercent(50), top + this.tileSizePercent(20));
                this.ctx.lineTo(left + this.tileSizePercent(66), top);
                this.ctx.fill();

                this.ctx.fillStyle = colour;
                this.ctx.beginPath();

                this.ctx.moveTo(left, top);
                this.ctx.lineTo(left, top + this.tileSize);
                this.ctx.lineTo(left + this.tileSize, top + this.tileSize);
                this.ctx.lineTo(left + this.tileSize, top);
                this.ctx.lineTo(left + this.tileSizePercent(66), top);
                this.ctx.lineTo(left + this.tileSizePercent(50), top + this.tileSizePercent(20));
                this.ctx.lineTo(left + this.tileSizePercent(33), top);
                break;
            case 'down':
                this.ctx.fillStyle = this.getLaserColour();
                this.ctx.beginPath();
                this.ctx.moveTo(left + this.tileSizePercent(33), top + this.tileSize);
                this.ctx.lineTo(left + this.tileSizePercent(50), top + this.tileSizePercent(80));
                this.ctx.lineTo(left + this.tileSizePercent(66), top + this.tileSize);
                this.ctx.fill();

                this.ctx.fillStyle = colour;
                this.ctx.beginPath();
                
                this.ctx.moveTo(left, top);
                this.ctx.lineTo(left, top + this.tileSize);
                this.ctx.lineTo(left + this.tileSizePercent(33), top + this.tileSize);
                this.ctx.lineTo(left + this.tileSizePercent(50), top + this.tileSizePercent(80));
                this.ctx.lineTo(left + this.tileSizePercent(66), top + this.tileSize);
                this.ctx.lineTo(left + this.tileSize, top + this.tileSize);
                this.ctx.lineTo(left + this.tileSize, top);
                break;
            case 'left':
                this.ctx.fillStyle = this.getLaserColour();
                this.ctx.beginPath();
                this.ctx.moveTo(left, top + this.tileSizePercent(33));
                this.ctx.lineTo(left + this.tileSizePercent(20), top + this.tileSizePercent(50));
                this.ctx.lineTo(left, top + this.tileSizePercent(66));
                this.ctx.fill();

                this.ctx.fillStyle = colour;
                this.ctx.beginPath();

                this.ctx.moveTo(left, top);
                this.ctx.lineTo(left, top + this.tileSizePercent(33));
                this.ctx.lineTo(left + this.tileSizePercent(20), top + this.tileSizePercent(50));
                this.ctx.lineTo(left, top + this.tileSizePercent(66));
                this.ctx.lineTo(left, top + this.tileSize);
                this.ctx.lineTo(left + this.tileSize, top + this.tileSize);
                this.ctx.lineTo(left + this.tileSize, top);
                break;
            case 'right':
                this.ctx.fillStyle = this.getLaserColour();
                this.ctx.beginPath();
                this.ctx.moveTo(left + this.tileSize, top + this.tileSizePercent(33));
                this.ctx.lineTo(left + this.tileSizePercent(80), top + this.tileSizePercent(50));
                this.ctx.lineTo(left + this.tileSize, top + this.tileSizePercent(66));
                this.ctx.fill();

                this.ctx.fillStyle = colour;
                this.ctx.beginPath();

                this.ctx.moveTo(left, top);
                this.ctx.lineTo(left, top + this.tileSize);
                this.ctx.lineTo(left + this.tileSize, top + this.tileSize);
                this.ctx.lineTo(left + this.tileSize, top + this.tileSizePercent(66));
                this.ctx.lineTo(left + this.tileSizePercent(80), top + this.tileSizePercent(50));
                this.ctx.lineTo(left + this.tileSize, top + this.tileSizePercent(33));
                this.ctx.lineTo(left + this.tileSize, top);
                break;
        }
        this.ctx.fill();
        
    }

    drawMapTile(mapTileID, row, cell) {
        if (mapTileID === undefined) {
            return false;
        }
        var tile = this.game.tiles.getByID('map', mapTileID);

        var top = row * this.tileSize;
        var left = cell * this.tileSize;

        this.drawTile(tile.colour, top, left);
    }

    drawTile(colour, top, left) {
        this.ctx.fillStyle = colour;
        this.ctx.fillRect(
            left + this.getLeftPadding(),
            top + this.getTopPadding(),
            this.tileSize, 
            this.tileSize
        );
    }

    drawTileLine(direction, thickness, colour, top, left) {

        top += this.getTopPadding();
        left += this.getLeftPadding();
        this.ctx.strokeStyle = colour;
        this.ctx.lineWidth = thickness;
        this.ctx.beginPath();
        if (direction === 'up' || direction === 'down') {
            this.ctx.moveTo(left + (this.tileSize / 2), top);
            this.ctx.lineTo(left + (this.tileSize / 2), top + this.tileSize);
        } else {
            this.ctx.moveTo(left, top + (this.tileSize / 2));
            this.ctx.lineTo(left + this.tileSize, top + (this.tileSize / 2));
        }
        this.ctx.stroke();
    }

    drawTileOutline(colour, top, left, thickness=this.tileSize / 11) {
        this.ctx.strokeStyle = colour;
        this.ctx.lineWidth = thickness;
        this.ctx.strokeRect(
            this.getLeftPadding() + left + (thickness),
            this.getTopPadding() + top + (thickness),
            this.tileSize - (thickness * 2), 
            this.tileSize - (thickness * 2)
        );
    }
}