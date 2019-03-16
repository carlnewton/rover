class Tiles {
    constructor() {
        this.mapTiles = [
            {
                id: 0,
                name: 'floor',
                colour: '#f0f6fb',
                obstructsPlayer: false,
                obstructsPushBlock: false,
                obstructsLaser: false,
            },
            {
                id: 1,
                name: 'wall',
                colour: '#5f6b75',
                obstructsPlayer: true,
                obstructsPushBlock: true,
                obstructsLaser: true,
            },
            {
                id: 2,
                name: 'noBlockFloor',
                colour: '#b3c3d1',
                obstructsPlayer: false,
                obstructsPushBlock: true,
                obstructsLaser: false,
            }
        ];

        this.playerTiles = [
            {
                id: 0,
                name: 'rover',
                colour: '#3A89C9',
                obstructsPlayer: true,
                obstructsPushBlock: true,
                obstructsLaser: true,
            }
        ];

        this.pushBlockTiles = [
            {
                id: 0,
                name: 'block',
                colour: '#FF8F8F',
                obstructsPlayer: true,
                obstructsPushBlock: true,
                obstructsLaser: true,
            },
            {
                id: 1,
                name: 'laser',
                colour: '#FF8F8F',
                obstructsPlayer: true,
                obstructsPushBlock: true,
                obstructsLaser: true,
            },
            {
                id: 2,
                name: 'laserCapture',
                colour: '#FF8F8F',
                obstructsPlayer: true,
                obstructsPushBlock: true,
                obstructsLaser: true,
            },
            {
                id: 3,
                name: 'mirror',
                colour: '#FF8F8F',
                detailColour: '#e5e7ea',
                obstructsPlayer: true,
                obstructsPushBlock: true,
                obstructsLaser: true,
            },
            {
                id: 4,
                name: 'slide',
                colour: '#FF8F8F',
                detailColour: '#e5e7ea',
                obstructsPlayer: true,
                obstructsPushBlock: true,
                obstructsLaser: true,
            },
        ];

        this.pushBlockHomeTiles = [
            {
                id: 0,
                name: 'pushBlockHome',
                colour: '#FF8F8F',
                obstructsPlayer: false,
                obstructsPushBlock: false,
                obstructsLaser: false,
            }
        ];

        this.exitTiles = [
            {
                id: 0,
                name: 'enabled',
                colour: '#3A89C9',
                obstructsPlayer: false,
                obstructsPushBlock: false,
                obstructsLaser: false,
            },
            {
                id: 1,
                name: 'disabled',
                colour: '#c2daee',
                obstructsPlayer: false,
                obstructsPushBlock: false,
                obstructsLaser: false,
            }
        ];

        this.laserTiles = [
            {
                id: 0,
                name: 'laserEmitter',
                colour: '#5f6b75',
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
