class Player {
    constructor(game) {
        this.game = game;
        this.position = {
            row: game.level.map.player.position.row,
            cell: game.level.map.player.position.cell
        };
    }

    move(direction) {
        var newPosition = this.game.level.getNextAvailablePositionForDirection(direction, this.position.row, this.position.cell),
            pushBlock = {};

        if (pushBlock = this.game.pushBlocks.getBlockByLocation(newPosition.row, newPosition.cell)) {
            if (this.game.pushBlocks.moveBlock(direction, pushBlock.id)) {
                this.position.row = newPosition.row;
                this.position.cell = newPosition.cell;
            }
        } else {
            this.position.row = newPosition.row;
            this.position.cell = newPosition.cell;
        }
    }
}