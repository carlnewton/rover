class PushBlocks {
    constructor(game) {
        this.game = game;
        this.list = [];

        for (let pushBlock of this.game.level.map.interactables.pushBlocks) {
            this.add(pushBlock.type, pushBlock.position.row, pushBlock.position.cell);
        }
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
                var newPosition = this.game.level.getNextAvailablePositionForDirection(direction, pushBlock.row, pushBlock.cell);
                if (newPosition.row === pushBlock.row && newPosition.cell === pushBlock.cell) {
                    return false;
                }

                if (this.getBlockByLocation(newPosition.row, newPosition.cell)) {
                    return false;
                }

                pushBlock.row = newPosition.row;
                pushBlock.cell = newPosition.cell;

                return true;
            }
        }

        return false;
    }
}