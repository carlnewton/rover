class Maps {
    constructor() {
        this.list = [
            {
                levelID: 1,
                map: [
                    [1, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, , 0, 0, 0],
                    [0, 0, 0, 0, 1, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                ],
                player: {
                    position: {
                        row: 2,
                        cell: 3
                    }
                },
                interactables: {
                    pushBlocks: [
                        {
                            type: 'default',
                            position: {
                                row: 2,
                                cell: 2
                            }
                        }
                    ]
                }
            }
        ];
    }

    getByLevelID(levelID) {
        for (let map of this.list) {
            if (map.levelID === levelID) {
                return map;
            }
        };
    }
}
