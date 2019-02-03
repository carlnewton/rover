class Player {
    constructor(game) {
        this.game = game;
        this.position = {
            row: game.level.map.player.position.row,
            cell: game.level.map.player.position.cell
        };
        this.nextPosition = {
            row: null,
            cell: null
        }
        this.speed = 8;
        this.moving = false;
    }

    move(direction) {

        var currentRow = Math.floor(this.position.row),
            currentCell = Math.floor(this.position.cell),
            nextPosition = this.game.level.getNextAvailablePositionForDirection(direction, currentRow, currentCell, 'player'),
            increment = (this.speed * this.game.delta) / 1000;

        if (this.nextPosition.row === null && this.nextPosition.cell === null) {
            var pushBlock = this.game.pushBlocks.getBlockByLocation(nextPosition.row, nextPosition.cell);
            if (pushBlock !== undefined) {
                if (this.game.pushBlocks.blockCanMove(direction, pushBlock.id)) {
                    this.game.move.add('pushBlock', pushBlock.id, direction);
                } else {
                    return false;
                }
                this.moving = true;
            }

            if (this.game.pushBlocks.getBlocksMovingToLocation(nextPosition.row, nextPosition.cell).length > 0) {
                return false;
            }

            this.nextPosition.row = nextPosition.row;
            this.nextPosition.cell = nextPosition.cell;
        }
        switch (direction) {
            case 'up':
                if (Math.floor(this.position.row - increment) < this.nextPosition.row) {
                    this.position.row = this.nextPosition.row;
                    this.nextPosition.row = null;
                    this.nextPosition.cell = null;
                    this.moving = false;
                    this.game.level.moves += 1;
                    this.checkStatus();
                    return true;
                }

                this.position.row -= increment;
                break;
            case 'down':
                if (Math.ceil(this.position.row + increment) > this.nextPosition.row) {
                    this.position.row = this.nextPosition.row;
                    this.nextPosition.row = null;
                    this.nextPosition.cell = null;
                    this.moving = false;
                    this.game.level.moves += 1;
                    this.checkStatus();
                    return true;
                }

                this.position.row += increment;
                break;
            case 'left':
                if (Math.floor(this.position.cell - increment) < this.nextPosition.cell) {
                    this.position.cell = this.nextPosition.cell;
                    this.nextPosition.row = null;
                    this.nextPosition.cell = null;
                    this.moving = false;
                    this.game.level.moves += 1;
                    this.checkStatus();
                    return true;
                }

                this.position.cell -= increment;
                break;
            case 'right':
                if (Math.ceil(this.position.cell + increment) > this.nextPosition.cell) {
                    this.position.cell = this.nextPosition.cell;
                    this.nextPosition.row = null;
                    this.nextPosition.cell = null;
                    this.moving = false;
                    this.game.level.moves += 1;
                    this.checkStatus();
                    return true;
                }

                this.position.cell += increment;
                break;
        }

        return this.position;
    }

    checkStatus() {
        this.checkAlive();

        if (this.game.exit.found()) {
            this.game.level.complete();
        }
    }

    checkAlive() {
        if (this.game.laser.laserExists(this.position.row, this.position.cell)) {
            this.game.move.clear();
            this.game.restartLevel();
        }
    }
}