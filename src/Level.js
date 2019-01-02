class Level {
    constructor(game, levelID=1) {
        this.game = game;
        this.map = this.game.maps.getByLevelID(levelID);
    }

    locationAvailable(row, cell) {
        if (!this.locationExists(row, cell)) {
            return false;
        }

        var tile = this.getMapTile(row, cell);

        if (tile.obstructs) {
            return false;
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

    getNextAvailablePositionForDirection(direction, row, cell) {
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

        if (!this.locationAvailable(row, cell)) {
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
}