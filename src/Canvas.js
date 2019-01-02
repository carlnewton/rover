class Canvas {
    constructor(game) {
        this.game = game;
        this.tileSize = 64;
        this.c=document.getElementById("canvas");
        this.ctx = this.c.getContext("2d");
        this.setDimensions();
    }

    setDimensions() {
        this.c.height = this.c.clientHeight;
        this.c.width = this.c.clientWidth;
    }

    drawFrame() {
        this.drawLevel();
        this.drawPlayer();
    }


    drawLevel() {
        this.drawMap();
        this.drawPushBlocks();
    }

    drawPlayer() {
        var playerTile = this.game.tiles.getPlayerTile(),
            top = this.game.player.position.row * this.tileSize,
            left = this.game.player.position.cell * this.tileSize,
            movement = this.game.move.getCurrentPosition('player', 0);

        if (movement !== false) {
            var top = movement.toRow * this.tileSize,
                left = movement.toCell * this.tileSize;

            if (movement.fromRow !== movement.toRow) {
                var fromRow = movement.fromRow * this.tileSize,
                    toRow = movement.toRow * this.tileSize;

                if (fromRow > toRow) {
                    top = fromRow - ((this.tileSize / 100) * movement.percentage)
                } else {
                    top = fromRow + ((this.tileSize / 100) * movement.percentage)
                }
            } else {
                var fromCell = movement.fromCell * this.tileSize,
                    toCell = movement.toCell * this.tileSize;

                if (fromCell > toCell) {
                    left = fromCell - ((this.tileSize / 100) * movement.percentage)
                } else {
                    left = fromCell + ((this.tileSize / 100) * movement.percentage)
                }
            }
        }

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

    drawPushBlocks() {
        for (let pushBlock of this.game.pushBlocks.list) {
            var top = pushBlock.row * this.tileSize,
                left = pushBlock.cell * this.tileSize,
                movement = this.game.move.getCurrentPosition('pushBlock', pushBlock.id);

            if (movement !== false) {
                var top = movement.toRow * this.tileSize,
                    left = movement.toCell * this.tileSize;

                if (movement.fromRow !== movement.toRow) {
                    var fromRow = movement.fromRow * this.tileSize,
                        toRow = movement.toRow * this.tileSize;

                    if (fromRow > toRow) {
                        top = fromRow - ((this.tileSize / 100) * movement.percentage)
                    } else {
                        top = fromRow + ((this.tileSize / 100) * movement.percentage)
                    }
                } else {
                    var fromCell = movement.fromCell * this.tileSize,
                        toCell = movement.toCell * this.tileSize;

                    if (fromCell > toCell) {
                        left = fromCell - ((this.tileSize / 100) * movement.percentage)
                    } else {
                        left = fromCell + ((this.tileSize / 100) * movement.percentage)
                    }
                }
            }
            this.drawTile(pushBlock.tile.colour, top, left);
        }
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
            left,
            top,
            this.tileSize, 
            this.tileSize
        );
    }
}