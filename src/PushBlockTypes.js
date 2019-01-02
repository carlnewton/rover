class PushBlockTypes {
    constructor() {
        this.list = [
            {
                id: 0,
                name: 'default',
                tileID: 0
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
