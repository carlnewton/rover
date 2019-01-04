class Player {
    constructor(game) {
        this.game = game;
        this.position = {
            row: game.level.map.player.position.row,
            cell: game.level.map.player.position.cell
        };
        this.speed = 25;
    }

    move(direction) {
        var newPosition = this.game.level.getNextAvailablePositionForDirection(direction, this.position.row, this.position.cell, 'player'),
            pushBlock = {};

        if (newPosition.row === this.position.row && newPosition.cell === this.position.cell) {
            return false;
        }

        if (pushBlock = this.game.pushBlocks.getBlockByLocation(newPosition.row, newPosition.cell)) {
            if (this.game.pushBlocks.moveBlock(direction, pushBlock.id)) {
                this.game.move.add('player', 0, this.position.row, this.position.cell, newPosition.row, newPosition.cell, this.speed);
                this.position.row = newPosition.row;
                this.position.cell = newPosition.cell;
            }
        } else {
            this.game.move.add('player', 0, this.position.row, this.position.cell, newPosition.row, newPosition.cell, this.speed);
            this.position.row = newPosition.row;
            this.position.cell = newPosition.cell;
        }

        this.checkAlive();

        if (this.game.exit.found()) {
            this.game.level.complete();
        }
    }

    checkAlive() {
        if (this.game.laser.laserExists(this.position.row, this.position.cell)) {
            this.game.restartLevel();
        }
    }
}