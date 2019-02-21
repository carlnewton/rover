class PushBlockTypes {
    constructor() {
        this.list = [
            {
                id: 0,
                name: 'default',
                tileID: 0
            },
            {
                id: 1,
                name: 'laser',
                tileID: 1
            },
            {
                id: 2,
                name: 'laserCapture',
                tileID: 2
            },
            {
                id: 3,
                name: 'mirror',
                tileID: 3
            },
            {
                id: 4,
                name: 'slide',
                tileID: 4
            }
        ];
    }

    getByName(name) {
        for (let type of this.list) {
            if (type.name === name) {
                return type;
            }
        };
    }

}
