class Tiles {
    constructor() {
        this.mapTiles = [
            {
                id: 0,
                name: 'floor',
                colour: '#e5ddcb',
                obstructsPlayer: false,
                obstructsPushBlock: false,
            },
            {
                id: 1,
                name: 'wall',
                colour: '#bc6247',
                obstructsPlayer: true,
                obstructsPushBlock: true,
            },
            {
                id: 2,
                name: 'noBlockFloor',
                colour: '#d9d2c1',
                obstructsPlayer: false,
                obstructsPushBlock: true,
            }
        ];

        this.playerTiles = [
            {
                id: 0,
                name: 'rover',
                colour: '#685e6c',
                obstructsPlayer: true,
                obstructsPushBlock: true,
            }
        ];

        this.pushBlockTiles = [
            {
                id: 0,
                name: 'block',
                colour: '#eb7b59',
                obstructsPlayer: true,
                obstructsPushBlock: true,
            }
        ];

        this.pushBlockHomeTiles = [
            {
                id: 0,
                name: 'pushBlockHome',
                colour: '#eb7b59',
                obstructsPlayer: false,
                obstructsPushBlock: false,
            }
        ];

        this.exitTiles = [
            {
                id: 0,
                name: 'enabled',
                colour: '#685e6c',
                obstructsPlayer: false,
                obstructsPushBlock: false,
            },
            {
                id: 1,
                name: 'disabled',
                colour: '#c7c0b1',
                obstructsPlayer: false,
                obstructsPushBlock: false,
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
