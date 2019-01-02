class Maps {
    constructor() {
        this.list = [
            // Level
            {
                levelID: 1,
                map: [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ],
                player: {
                    position: {
                        row: 3,
                        cell: 2
                    }
                },
                interactables: {
                    exits: [
                        {
                            position: {
                                row: 3,
                                cell: 8
                            }
                        }
                    ]
                }
            },
            // Level
            {
                levelID: 2,
                map: [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ],
                player: {
                    position: {
                        row: 3,
                        cell: 2
                    }
                },
                interactables: {
                    exits: [
                        {
                            position: {
                                row: 3,
                                cell: 8
                            }
                        }
                    ]
                }
            },
            // Level
            {
                levelID: 3,
                map: [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                ],
                player: {
                    position: {
                        row: 3,
                        cell: 2
                    }
                },
                interactables: {
                    pushBlocks: [
                        {
                            type: 'default',
                            position: {
                                row: 0,
                                cell: 5
                            }
                        }
                    ],
                    exits: [
                        {
                            position: {
                                row: 3,
                                cell: 8
                            }
                        }
                    ]
                }
            },
            // Level
            {
                levelID: 4,
                map: [
                    [2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
                    [2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
                    [2, 2, 2, 0, 0, 1, 0, 0, 2, 2, 2],
                    [2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2],
                    [2, 2, 2, 0, 0, 1, 0, 0, 2, 2, 2],
                    [2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
                    [2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
                ],
                player: {
                    position: {
                        row: 3,
                        cell: 1
                    }
                },
                interactables: {
                    pushBlocks: [
                        {
                            type: 'default',
                            position: {
                                row: 3,
                                cell: 5
                            }
                        }
                    ],
                    pushBlockHomes: [
                        {
                            position: {
                                row: 3,
                                cell: 5
                            }
                        },
                    ],
                    exits: [
                        {
                            position: {
                                row: 3,
                                cell: 9
                            }
                        }
                    ]
                }
            },
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
