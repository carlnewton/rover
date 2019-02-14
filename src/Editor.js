class Editor {
    constructor(game) {
        this.game = game;
        this.enabled = false;
    }

    start() {
        this.game.loadLevel(this.game.level.map.levelID);
    }

    tick() {
        if (this.game.level.map.interactables.pushBlocks !== undefined) {
            this.game.pushBlocks.addAll();
            this.game.laser.updateEmitterPushBlocks();
        }
        this.game.laser.emitLasers();
    }

    click() {
        var mapLeft = this.game.canvas.getLeftPadding(),
            mapRight = mapLeft + this.game.canvas.tileSize * this.game.level.map.map[0].length,
            mapTop = this.game.canvas.getTopPadding(),
            mapBottom = mapTop + this.game.canvas.tileSize * this.game.level.map.map.length;

        if (this.game.controls.pointer.y < mapTop) {
            this.addRow('top');
        } else if (this.game.controls.pointer.y > mapBottom) {
            this.addRow('bottom');
        } else if (this.game.controls.pointer.x < mapLeft) {
            this.addColumn('left');
        } else if (this.game.controls.pointer.x > mapRight) {
            this.addColumn('right');
        } else {
            var pointerTop = this.game.controls.pointer.y - mapTop,
                pointerBottom = mapBottom - this.game.controls.pointer.y,
                pointerLeft = this.game.controls.pointer.x - mapLeft,
                pointerRight = mapRight - this.game.controls.pointer.x,
                lowestDistance = Math.min(pointerTop, pointerBottom, pointerLeft, pointerRight);

            switch (lowestDistance) {
                case pointerTop:
                    this.removeRow('top');
                    break;
                case pointerBottom:
                    this.removeRow('bottom');
                    break;
                case pointerLeft:
                    this.removeColumn('left');
                    break;
                case pointerRight:
                    this.removeColumn('right');
                    break;
            }
        }

        this.game.canvas.setDimensions();
    }

    addRow(location) {
        switch (location) {
            case 'top':
                var row = JSON.parse(JSON.stringify(this.game.level.map.map[0]));
                this.game.level.map.map.unshift(row);
                break;
            case 'bottom':
                var row = JSON.parse(JSON.stringify(this.game.level.map.map.slice(-1)[0]));
                this.game.level.map.map.push(row);
                break;
        }
    }

    removeRow(location) {
        if (this.game.level.map.map.length <= 3) {
            return;
        }

        switch (location) {
            case 'top':
                this.game.level.map.map.splice(0, 1)
                break;
            case 'bottom':
                this.game.level.map.map.splice(-1, 1)
                break;
        }
    }

    removeColumn(location) {
        if (this.game.level.map.map[0].length <= 3) {
            return;
        }

        switch (location) {
            case 'left':
                for (let row of this.game.level.map.map) {
                    row.splice(0, 1);
                }
                break;
            case 'right':
                for (let row of this.game.level.map.map) {
                    row.splice(-1, 1);
                }
                break;
        }
    }

    addColumn(location) {
        switch (location) {
            case 'left':
                for (let row of this.game.level.map.map) {
                    row.unshift(row[0])
                }
                break;
            case 'right':
                for (let row of this.game.level.map.map) {
                    row.push(row.slice(-1)[0])
                }
                break;
        }
    }

    changeMapTile(name) {
        var focussedTile = this.getFocussedTile();
        if (focussedTile === undefined) {
            return;
        }

        var tile = this.game.tiles.getMapTileByName(name);
        this.game.level.map.map[focussedTile.y][focussedTile.x] = tile.id;
    }

    changePlayerPosition() {
        var focussedTile = this.getFocussedTile();
        if (focussedTile === undefined) {
            return;
        }

        this.game.level.map.player.position = {
            row: focussedTile.y,
            cell: focussedTile.x
        }

        this.game.player.position = this.game.level.map.player.position;
    }

    changeExitPosition() {
        var focussedTile = this.getFocussedTile();
        if (focussedTile === undefined) {
            return;
        }

        this.game.level.map.interactables.exits[0].position = {
            row: focussedTile.y,
            cell: focussedTile.x
        }
    }

    addLaser() {
        var focussedTile = this.getFocussedTile();
        if (focussedTile === undefined) {
            return;
        }

        var laserEmitters = this.game.level.map.interactables.laserEmitters;

        if (laserEmitters === undefined) {
            if (this.game.level.map.interactables === undefined) {
                this.game.level.map.interactables = {};
            }

            if (this.game.level.map.interactables.laserEmitters === undefined) {
                this.game.level.map.interactables.laserEmitters = [];
            }

            this.game.level.map.interactables.laserEmitters.push(
                {
                    position: {
                        row: focussedTile.y,
                        cell: focussedTile.x
                    },
                    direction: 'down'
                }
            );
            this.game.laser.addEmitters();
            return;
        }

        for (let laserEmitter of laserEmitters) {
            if (
                laserEmitter.position.row === focussedTile.y
                && laserEmitter.position.cell === focussedTile.x
            ) {
                return;
            }
        }

        laserEmitters.push(
            {
                position: {
                    row: focussedTile.y,
                    cell: focussedTile.x
                },
                direction: 'down'
            }
        )
        this.game.laser.addEmitters();
    }

    rotateEntity() {
        var focussedTile = this.getFocussedTile();
        if (focussedTile === undefined) {
            return;
        }

        if (this.game.level.map.interactables === undefined) {
            return;
        }

        var pushBlock = this.game.pushBlocks.getBlockByLocation(focussedTile.y, focussedTile.x);
        if (pushBlock !== undefined) {
            for (let mapPushBlock of this.game.level.map.interactables.pushBlocks) {
                if (
                    mapPushBlock.position.row === pushBlock.row
                    && mapPushBlock.position.cell === pushBlock.cell
                ) {
                    var newOrientation = (mapPushBlock.orientation || 0) + 90;
                    if (newOrientation > 270) {
                        newOrientation = 0;
                    }

                    mapPushBlock.orientation = newOrientation;
                    return;
                }
            }
        }
    }
 
    addPushBlockHome() {
        var focussedTile = this.getFocussedTile();
        if (focussedTile === undefined) {
            return;
        }

        var pushBlockHomes = this.game.level.map.interactables.pushBlockHomes;

        if (pushBlockHomes === undefined) {
            if (this.game.level.map.interactables === undefined) {
                this.game.level.map.interactables = {};
            }

            if (this.game.level.map.interactables.pushBlockHomes === undefined) {
                this.game.level.map.interactables.pushBlockHomes = [];
            }

            this.game.level.map.interactables.pushBlockHomes.push(
                {
                    position: {
                        row: focussedTile.y,
                        cell: focussedTile.x
                    }
                }
            );
            return;
        }

        for (let pushBlockHome of pushBlockHomes) {
            if (
                pushBlockHome.position.row === focussedTile.y
                && pushBlockHome.position.cell === focussedTile.x
            ) {
                return;
            }
        }

        pushBlockHomes.push(
            {
                position: {
                    row: focussedTile.y,
                    cell: focussedTile.x
                }
            }
        )
    }

    cyclePushBlock(focussedTile) {
        var block = this.game.pushBlocks.getBlockByLocation(focussedTile.y, focussedTile.x);

        var pushBlockTileID = this.game.tiles.pushBlockTiles.length;
        while (pushBlockTileID--) {
            if (this.game.tiles.pushBlockTiles[pushBlockTileID].id === block.tile.id) {
                var newPushBlockTileID = pushBlockTileID + 1;
                if (newPushBlockTileID >= this.game.tiles.pushBlockTiles.length) {
                    newPushBlockTileID = 0;
                }
                var newTile = this.game.tiles.pushBlockTiles[newPushBlockTileID];
                for (let pushBlockType of this.game.pushBlockTypes.list) {
                    if (pushBlockType.tileID === newTile.id) {
                        for (let mapPushBlock of this.game.level.map.interactables.pushBlocks) {
                            if (
                                mapPushBlock.position.row === focussedTile.y
                                && mapPushBlock.position.cell === focussedTile.x
                            ) {
                                mapPushBlock.type = pushBlockType.name
                            }
                        }
                        
                        return;
                    }
                }
            }
        }
    }

    removeEntities() {
        if (this.game.level.map.interactables === undefined) {
            return;
        }

        var focussedTile = this.getFocussedTile();
        if (focussedTile === undefined) {
            return;
        }

        if (this.game.pushBlocks.getBlockByLocation(focussedTile.y, focussedTile.x) !== undefined) {
            var pushBlockID = this.game.pushBlocks.list.length;
            while (pushBlockID--) {
                if (
                    this.game.pushBlocks.list[pushBlockID].row === focussedTile.y
                    && this.game.pushBlocks.list[pushBlockID].cell === focussedTile.x
                ) {
                    this.game.pushBlocks.list.splice(pushBlockID, 1);

                    var pushBlocks = this.game.level.map.interactables.pushBlocks,
                        mapPushBlockID = pushBlocks.length;
                    while (mapPushBlockID--) {
                        if (
                            pushBlocks[mapPushBlockID].position.row === focussedTile.y
                            && pushBlocks[mapPushBlockID].position.cell === focussedTile.x
                        ) {
                            var pushBlockType = pushBlocks[mapPushBlockID].type;
                            pushBlocks.splice(mapPushBlockID, 1);
                        }
                    } 
                }
            }
            return;
        }

        var pushBlockHomes = this.game.level.map.interactables.pushBlockHomes;

        if (pushBlockHomes !== undefined) {
            var pushBlockHomeID = pushBlockHomes.length;
            while (pushBlockHomeID--) {
                if (
                    pushBlockHomes[pushBlockHomeID].position.row === focussedTile.y
                    && pushBlockHomes[pushBlockHomeID].position.cell === focussedTile.x
                ) {
                    pushBlockHomes.splice(pushBlockHomeID, 1);
                    return;
                }
            }
        }


        var laserEmitters = this.game.level.map.interactables.laserEmitters;

        if (laserEmitters === undefined) {
            return
        }

        var laserEmitterID = laserEmitters.length;

        while (laserEmitterID--) {
            if (
                laserEmitters[laserEmitterID].position.row === focussedTile.y
                && laserEmitters[laserEmitterID].position.cell === focussedTile.x
            ) {
                laserEmitters.splice(laserEmitterID, 1);
                
                var emitters = this.game.laser.emitters,
                    emitterID = emitters.length;
                while (emitterID--) {
                    if (
                        emitters[emitterID].position.row === focussedTile.y
                        && emitters[emitterID].position.cell === focussedTile.x
                    ) {
                        emitters.splice(emitterID, 1);
                    }
                }
                return;
            }
        }

    }

    addPushBlock() {
        var focussedTile = this.getFocussedTile();
        if (focussedTile === undefined) {
            return;
        }

        if (this.game.pushBlocks.getBlockByLocation(focussedTile.y, focussedTile.x) !== undefined) {
            this.cyclePushBlock(focussedTile);
            return;
        }

        if (this.game.level.map.interactables === undefined) {
            this.game.level.map.interactables = {};
        }

        if (this.game.level.map.interactables.pushBlocks === undefined) {
            this.game.level.map.interactables.pushBlocks = [];
        }
        this.game.level.map.interactables.pushBlocks.push(
            {
                type: 'default',
                position: {
                    row: focussedTile.y,
                    cell: focussedTile.x
                }
            }
        );
        this.game.pushBlocks.add('default', focussedTile.y, focussedTile.x, 0);
    }

    getFocussedTile() {
        var left = this.game.canvas.getLeftPadding(),
            right = left + this.game.canvas.tileSize * this.game.level.map.map[0].length,
            top = this.game.canvas.getTopPadding(),
            bottom = top + this.game.canvas.tileSize * this.game.level.map.map.length;

        if (
            this.game.controls.pointer.x > left 
            && this.game.controls.pointer.x < right
            && this.game.controls.pointer.y > top
            && this.game.controls.pointer.y < bottom
        ) {
            var tileX = Math.floor((this.game.controls.pointer.x - left) / this.game.canvas.tileSize),
                tileY = Math.floor((this.game.controls.pointer.y - top) / this.game.canvas.tileSize);

            return {
                x: tileX,
                y: tileY
            }

        }
    }
}