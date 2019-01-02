class Tiles {
    constructor() {
        this.mapTiles = [
            {
                id: 0,
                name: 'floor',
                colour: '#ddd',
                obstructs: false,
            },
            {
                id: 1,
                name: 'wall',
                colour: '#999',
                obstructs: true,
            }
        ];

        this.playerTiles = [
            {
                id: 0,
                name: 'rover',
                colour: '#000',
                obstructs: true,
            }
        ];

        this.pushBlockTiles = [
            {
                id: 0,
                name: 'block',
                colour: '#c90',
                obstructs: true,
            }
        ];
    }

    getByID(type, id) {
        switch(type) {
            case 'map':
                return this.getMapTileByID(id);
                break;
            case 'pushBlock':
                return this.getPushBlockTileByID(id);
                break;
        }
    } 

    getMapTileByID(id) {
        for (let tile of this.mapTiles) {
            if (tile.id === id) {
                return tile;
            }
        };
    }

    getPushBlockTileByID(id) {
        for (let tile of this.pushBlockTiles) {
            if (tile.id === id) {
                return tile;
            }
        };
    }

    getPlayerTile(id=0) {
        for (let tile of this.playerTiles) {
            if (tile.id === id) {
                return tile;
            }
        };
    }
}
