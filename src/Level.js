class Level {
    constructor(game, levelID=1) {
        this.game = game;
        this.map = this.game.maps.getByLevelID(levelID);
        this.begin = true;
        this.moves = 0;
        this.startTime = Date.now();
    }

    locationAvailable(row, cell, availableFor) {
        if (!this.locationExists(row, cell)) {
            return false;
        }

        var tile = this.getMapTile(row, cell);

        if (
            availableFor === 'player' && tile.obstructsPlayer
            || availableFor === 'pushBlock' && tile.obstructsPushBlock
            || availableFor === 'laser' && tile.obstructsLaser
        ) {
            return false;
        }

        if (availableFor === 'laser' || availableFor === 'pushBlock') {
            if (this.game.pushBlocks.getBlockByLocation(row, cell)) {
                return false;
            }

            if (this.game.pushBlocks.getBlocksMovingToLocation(row, cell).length > 0) {
                return false;
            }
        }

        if (this.map.interactables !== undefined && this.map.interactables.laserEmitters !== undefined) {
            for (let emitter of this.map.interactables.laserEmitters) {
                if (emitter.position.row === row && emitter.position.cell === cell) {
                    return false;
                }
            }
        }

        return true;
    }

    locationExists(row, cell) {
        if (this.map.map[row] === undefined) {
            return false;
        }

        if (this.map.map[row][cell] === undefined) {
            return false;
        }

        return true;
    }

    getMapTile(row, cell) {
        if (!this.locationExists(row, cell)) {
            return false;
        }

        var mapTileID = this.map.map[row][cell];

        return this.game.tiles.getByID('map', mapTileID);
    }

    getNextAvailablePositionForDirection(direction, row, cell, availableFor) {
        var originalRow = row,
            originalCell = cell;

        switch (direction) {
            case 'up':
                row -= 1;
                break;
            case 'down':
                row += 1;
                break;
            case 'left':
                cell -= 1;
                break;
            case 'right':
                cell += 1;
                break;
        }

        if (!this.locationAvailable(row, cell, availableFor)) {
            return {
                row: originalRow,
                cell: originalCell
            };
        }

        return {
            row: row,
            cell: cell
        };
    }

    complete() {
        this.game.queueNextLevel();
    }

    initialise() {
        this.game.pushBlocks.checkStatus();
    }
}