class Tiles {
    constructor() {
        this.mapTiles = [
            {
                id: 0,
                name: 'floor',
                colour: '#e5ddcb',
                obstructsPlayer: false,
                obstructsPushBlock: false,
                obstructsLaser: false,
            },
            {
                id: 1,
                name: 'wall',
                colour: '#bc6247',
                obstructsPlayer: true,
                obstructsPushBlock: true,
                obstructsLaser: true,
            },
            {
                id: 2,
                name: 'noBlockFloor',
                colour: '#d9d2c1',
                obstructsPlayer: false,
                obstructsPushBlock: true,
                obstructsLaser: false,
            }
        ];

        this.playerTiles = [
            {
                id: 0,
                name: 'rover',
                colour: '#685e6c',
                obstructsPlayer: true,
                obstructsPushBlock: true,
                obstructsLaser: true,
            }
        ];

        this.pushBlockTiles = [
            {
                id: 0,
                name: 'block',
                colour: '#eb7b59',
                obstructsPlayer: true,
                obstructsPushBlock: true,
                obstructsLaser: true,
            },
            {
                id: 1,
                name: 'laser',
                colour: '#eb7b59',
                obstructsPlayer: true,
                obstructsPushBlock: true,
                obstructsLaser: true,
            },
            {
                id: 2,
                name: 'laserCapture',
                colour: '#eb7b59',
                obstructsPlayer: true,
                obstructsPushBlock: true,
                obstructsLaser: true,
            },
            {
                id: 3,
                name: 'mirror',
                colour: '#eb7b59',
                detailColour: '#d9d2c1',
                obstructsPlayer: true,
                obstructsPushBlock: true,
                obstructsLaser: true,
            }
        ];

        this.pushBlockHomeTiles = [
            {
                id: 0,
                name: 'pushBlockHome',
                colour: '#eb7b59',
                obstructsPlayer: false,
                obstructsPushBlock: false,
                obstructsLaser: false,
            }
        ];

        this.exitTiles = [
            {
                id: 0,
                name: 'enabled',
                colour: '#685e6c',
                obstructsPlayer: false,
                obstructsPushBlock: false,
                obstructsLaser: false,
            },
            {
                id: 1,
                name: 'disabled',
                colour: '#c7c0b1',
                obstructsPlayer: false,
                obstructsPushBlock: false,
                obstructsLaser: false,
            }
        ];

        this.laserTiles = [
            {
                id: 0,
                name: 'laserEmitter',
                colour: '#bc6247',
                obstructsPlayer: true,
                obstructsPushBlock: true
            }
        ]
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

    getMapTileByName(name) {
        for (let tile of this.mapTiles) {
            if (tile.name === name) {
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
