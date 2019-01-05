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

        for (let pushBlock of this.game.level.map.interactables.pushBlocks) {
            var orientation = 0;
            if (pushBlock.orientation !== undefined) {
                orientation = pushBlock.orientation;
            }
            this.add(pushBlock.type, pushBlock.position.row, pushBlock.position.cell, orientation);
        }

        this.checkAllPushBlocksHome();
    }

    add(type, row, cell) {
        var id = this.list.length,
            pushBlockType = this.game.pushBlockTypes.getByName(type),
            tile = this.game.tiles.getByID('pushBlock', pushBlockType.tileID),
            pushBlock = new PushBlock(id, row, cell, tile);

        this.list.push(pushBlock);
    }

    getBlockByLocation(row, cell) {
        for (let pushBlock of this.list) {
            if (pushBlock.row === row && pushBlock.cell === cell) {
                return pushBlock;
            }
        }
    }

    moveBlock(direction, id) {
        for (let pushBlock of this.list) {
            if (pushBlock.id === id) {
                var newPosition = this.game.level.getNextAvailablePositionForDirection(direction, pushBlock.row, pushBlock.cell, 'pushBlock');
                if (newPosition.row === pushBlock.row && newPosition.cell === pushBlock.cell) {
                    return false;
                }

                if (this.getBlockByLocation(newPosition.row, newPosition.cell)) {
                    return false;
                }

                this.game.move.add('pushBlock', pushBlock.id, pushBlock.row, pushBlock.cell, newPosition.row, newPosition.cell, this.game.player.speed);
                pushBlock.row = newPosition.row;
                pushBlock.cell = newPosition.cell;

                if (this.checkAllPushBlocksHome()) {
                    this.game.exit.enable();
                } else {
                    this.game.exit.disable();
                }

                return true;
            }
        }

        return false;
    }

    checkAllPushBlocksHome() {
        if (this.game.level.map.interactables.pushBlockHomes === undefined) {
            this.allPushBlocksHome = true;
            return true;
        }

        for (let pushBlock of this.list) {
            if (!this.checkPushBlockHome(pushBlock)) {
                this.allPushBlocksHome = false;
                return false;
            }
        }
        this.allPushBlocksHome = true;
        return true;
    }

    checkPushBlockHome(pushBlock) {
        for (let pushBlockHome of this.game.level.map.interactables.pushBlockHomes) {
            if (pushBlockHome.position.row === pushBlock.row && pushBlockHome.position.cell === pushBlock.cell) {
                return true;
            }
        }
    }
}