class PushBlocks {
    constructor(game) {
        this.game = game;
        this.list = [];
        this.allPushBlocksHome = false;

        if (
            this.game.level.map.interactables === undefined
            || this.game.level.map.interactables.pushBlocks === undefined
        ) {
            this.allPushBlocksHome = true;
            return;
        }
        this.addAll();
        
    }

    addAll() {
        this.list = [];
        for (let pushBlock of this.game.level.map.interactables.pushBlocks) {
            var orientation = 0;
            if (pushBlock.orientation !== undefined) {
                orientation = pushBlock.orientation;
            }
            this.add(pushBlock.type, pushBlock.position.row, pushBlock.position.cell, orientation);
        }
    }

    add(type, row, cell, orientation) {
        var id = this.list.length,
            pushBlockType = this.game.pushBlockTypes.getByName(type),
            tile = this.game.tiles.getByID('pushBlock', pushBlockType.tileID),
            pushBlock = new PushBlock(id, row, cell, tile, orientation);

        this.list.push(pushBlock);
    }

    getBlockByLocation(row, cell) {
        for (let pushBlock of this.list) {
            if (pushBlock.row === row && pushBlock.cell === cell) {
                return pushBlock;
            }
        }
    }

    getBlocksMovingToLocation(row, cell) {
        var pushBlocks = [];
        for (let pushBlock of this.list) {
            if (pushBlock.nextRow === row && pushBlock.nextCell === cell) {
                pushBlocks.push(pushBlock);
            }
        }

        return pushBlocks;
    }

    moveBlock(direction, id) {
        var pushBlock = this.getBlockByID(id),
            increment = (this.game.player.speed * this.game.delta) / 1000;

        if (!pushBlock) {
            return false;
        }

        var newPosition = this.game.level.getNextAvailablePositionForDirection(direction, Math.floor(pushBlock.row), Math.floor(pushBlock.cell), 'pushBlock');

        if (pushBlock.nextRow === null && pushBlock.nextCell === null) {
            if (!this.blockCanMove(direction, id)) {
                return false;
            }
            pushBlock.nextRow = newPosition.row;
            pushBlock.nextCell = newPosition.cell;
        }

        switch (direction) {
            case 'up':
                if (Math.floor(pushBlock.row - increment) < pushBlock.nextRow) {
                    pushBlock.row = pushBlock.nextRow;
                    pushBlock.nextRow = null;
                    pushBlock.nextCell = null;
                    this.checkStatus();
                    return true;
                }

                pushBlock.row -= increment;
                break;
            case 'down':
                if (Math.ceil(pushBlock.row + increment) > pushBlock.nextRow) {
                    pushBlock.row = pushBlock.nextRow
                    pushBlock.nextRow = null;
                    pushBlock.nextCell = null;
                    this.checkStatus();
                    return true;
                }

                pushBlock.row += increment;
                break;
            case 'left':
                if (Math.floor(pushBlock.cell - increment) < pushBlock.nextCell) {
                    pushBlock.cell = pushBlock.nextCell
                    pushBlock.nextRow = null;
                    pushBlock.nextCell = null;
                    this.checkStatus();
                    return true;
                }

                pushBlock.cell -= increment;
                break;
            case 'right':
                if (Math.ceil(pushBlock.cell + increment) > pushBlock.nextCell) {
                    pushBlock.cell = pushBlock.nextCell
                    pushBlock.nextRow = null;
                    pushBlock.nextCell = null;
                    this.checkStatus();
                    return true;
                }

                pushBlock.cell += increment;
                break;
        }
    }

    checkStatus() {
        this.game.laser.updateEmitterPushBlocks();
        this.game.laser.emitLasers();
        if (this.checkAllPushBlocksHome() && this.checkAllLaserCapturesActive()) {
            this.game.exit.enable();
        } else {
            this.game.exit.disable();
        }
    }

    checkAllLaserCapturesActive() {
        for (let pushBlock of this.list) {
            if (pushBlock.tile.name === 'laserCapture' && pushBlock.active === false) {
                return false;
            }
        }
        return true;
    }

    getBlockByID(id) {
        for (let pushBlock of this.list) {
            if (pushBlock.id === id) {
                return pushBlock;
            }
        }
    }

    deactivateAll() {
         for (let pushBlock of this.list) {
            pushBlock.active = false;
        }
    }

    blockCanMove(direction, id) {
        var pushBlock = this.getBlockByID(id);

        if (!pushBlock) {
            return false;
        }

        var newPosition = this.game.level.getNextAvailablePositionForDirection(direction, pushBlock.row, pushBlock.cell, 'pushBlock');
        if (newPosition.row === pushBlock.row && newPosition.cell === pushBlock.cell) {
            return false;
        }

        if (this.getBlockByLocation(newPosition.row, newPosition.cell)) {
            return false;
        }

        if (this.getBlocksMovingToLocation(newPosition.row, newPosition.cell).length > 0) {
            return false;
        }

        return true;
    }

    checkAllPushBlocksHome() {
        if (this.game.level.map.interactables.pushBlockHomes === undefined) {
            this.allPushBlocksHome = true;
            return true;
        }

        for (let pushBlockHome of this.game.level.map.interactables.pushBlockHomes) {
            var homeIsOccupied = false;
            for (let pushBlock of this.list) {
                if (pushBlock.row === pushBlockHome.position.row && pushBlock.cell === pushBlockHome.position.cell) {
                    homeIsOccupied = true;
                }
            }
            if (homeIsOccupied === false) {
                this.allPushBlocksHome = false;
                return false;
            }
        }

        this.allPushBlocksHome = true;
        return true;
    }
}