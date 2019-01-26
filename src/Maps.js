class Maps {
    constructor() {
        this.list = [
            // Level
            {
                levelID: 1,
                map: [
                    [1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
                ],
                player: {
                    position: {
                        row: 2,
                        cell: 2
                    }
                },
                interactables: {
                    exits: [
                        {
                            position: {
                                row: 2,
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
                    [1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                ],
                player: {
                    position: {
                        row: 2,
                        cell: 2
                    }
                },
                interactables: {
                    exits: [
                        {
                            position: {
                                row: 2,
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
                    [1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                    [1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
                ],
                player: {
                    position: {
                        row: 4,
                        cell: 2
                    }
                },
                interactables: {
                    pushBlocks: [
                        {
                            type: 'default',
                            position: {
                                row: 2,
                                cell: 5
                            }
                        }
                    ],
                    exits: [
                        {
                            position: {
                                row: 4,
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
                    [1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1],
                    [2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
                    [2, 2, 2, 0, 0, 1, 0, 0, 2, 2, 2],
                    [2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2],
                    [2, 2, 2, 0, 0, 1, 0, 0, 2, 2, 2],
                    [2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2],
                    [1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1],
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
            // Level
            {
                levelID: 5,
                map: [
                    [1, 0, 0, 1, 1, 1, 1],
                    [1, 0, 0, 0, 0, 0, 0],
                    [0, 0, 2, 0, 2, 0, 0],
                    [0, 0, 0, 0, 0, 0, 1],
                    [1, 0, 2, 0, 2, 0, 1],
                    [1, 0, 0, 0, 0, 0, 1],
                    [1, 1, 1, 1, 0, 0, 1],
                ],
                player: {
                    position: {
                        row: 3,
                        cell: 3
                    }
                },
                interactables: {
                    pushBlocks: [
                        {
                            type: 'default',
                            position: {
                                row: 5,
                                cell: 3
                            }
                        }
                    ],
                    pushBlockHomes: [
                        {
                            position: {
                                row: 3,
                                cell: 3
                            }
                        },
                    ],
                    exits: [
                        {
                            position: {
                                row: 5,
                                cell: 3
                            }
                        }
                    ]
                }
            },
            // Level
            {
                levelID: 6,
                map: [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],
                    [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                    [1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
                ],
                player: {
                    position: {
                        row: 6,
                        cell: 5
                    }
                },
                interactables: {
                    pushBlocks: [
                        {
                            type: 'default',
                            position: {
                                row: 4,
                                cell: 3
                            }
                        },
                        {
                            type: 'default',
                            position: {
                                row: 1,
                                cell: 7
                            }
                        }
                    ],
                    pushBlockHomes: [
                        {
                            position: {
                                row: 4,
                                cell: 3
                            }
                        },
                        {
                            position: {
                                row: 1,
                                cell: 7
                            }
                        },
                    ],
                    exits: [
                        {
                            position: {
                                row: 3,
                                cell: 5
                            }
                        }
                    ]
                }
            },
            // Level
            {
                levelID: 7,
                map: [
                    [0, 0, 0, 1, 0, 2, 0, 0],
                    [2, 0, 0, 0, 0, 1, 0, 0],
                    [1, 2, 0, 0, 2, 1, 1, 0],
                    [1, 1, 1, 0, 0, 1, 1, 0],
                    [1, 1, 1, 0, 0, 1, 1, 0],
                    [1, 1, 1, 1, 0, 0, 0, 0],
                    [1, 1, 1, 1, 1, 0, 0, 0],
                ],
                player: {
                    position: {
                        row: 6,
                        cell: 7
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
                        },
                        {
                            type: 'default',
                            position: {
                                row: 3,
                                cell: 3
                            }
                        },
                        {
                            type: 'default',
                            position: {
                                row: 4,
                                cell: 4
                            }
                        },
                        {
                            type: 'default',
                            position: {
                                row: 0,
                                cell: 6
                            }
                        }
                    ],
                    pushBlockHomes: [
                        {
                            position: {
                                row: 2,
                                cell: 2
                            }
                        },
                        {
                            position: {
                                row: 3,
                                cell: 3
                            }
                        },
                        {
                            position: {
                                row: 4,
                                cell: 4
                            }
                        },
                        {
                            position: {
                                row: 0,
                                cell: 7
                            }
                        },
                    ],
                    exits: [
                        {
                            position: {
                                row: 6,
                                cell: 7
                            }
                        }
                    ]
                }
            },
            // Level
            {
                levelID: 8,
                map: [
                    [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
                ],
                player: {
                    position: {
                        row: 2,
                        cell: 2
                    }
                },
                interactables: {
                    pushBlocks: [
                        {
                            type: 'default',
                            position: {
                                row: 4,
                                cell: 2
                            }
                        },
                    ],
                    exits: [
                        {
                            position: {
                                row: 3,
                                cell: 8
                            }
                        }
                    ],
                    laserEmitters: [
                        {
                            position: {
                                row: 0,
                                cell: 5
                            },
                            direction: 'down'
                        }
                    ]
                }
            },
            // Level
            {
                levelID: 9,
                map: [
                    [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
                    [1, 1, 1, 1, 2, 2, 0, 1, 0, 0, 0],
                    [0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
                    [0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1],
                    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
                    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
                    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
                ],
                player: {
                    position: {
                        row: 6,
                        cell: 1
                    }
                },
                interactables: {
                    pushBlocks: [
                        {
                            type: 'default',
                            position: {
                                row: 3,
                                cell: 1
                            }
                        },
                        {
                            type: 'default',
                            position: {
                                row: 4,
                                cell: 1
                            }
                        },
                        {
                            type: 'default',
                            position: {
                                row: 5,
                                cell: 3
                            }
                        },
                    ],
                    exits: [
                        {
                            position: {
                                row: 2,
                                cell: 9
                            }
                        }
                    ],
                    laserEmitters: [
                        {
                            position: {
                                row: 0,
                                cell: 4
                            },
                            direction: 'down'
                        },
                        {
                            position: {
                                row: 0,
                                cell: 5
                            },
                            direction: 'down'
                        },
                        {
                            position: {
                                row: 0,
                                cell: 6
                            },
                            direction: 'down'
                        },
                    ],

                }
            },
            // Level
            {
                levelID: 10,
                map: [
                    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                    [0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0],
                    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
                    [1, 0, 1, 0, 2, 0, 2, 1, 0, 1, 1],
                    [0, 0, 1, 2, 1, 1, 0, 0, 2, 1, 1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                ],
                player: {
                    position: {
                        row: 1,
                        cell: 6
                    }
                },
                interactables: {
                    pushBlocks: [
                        {
                            type: 'default',
                            position: {
                                row: 5,
                                cell: 6
                            }
                        },
                        {
                            type: 'default',
                            position: {
                                row: 1,
                                cell: 9
                            }
                        },
                    ],
                    pushBlockHomes: [
                        {
                            position: {
                                row: 5,
                                cell: 10
                            }
                        },
                        {
                            position: {
                                row: 1,
                                cell: 8
                            }
                        },
                    ],
                    exits: [
                        {
                            position: {
                                row: 1,
                                cell: 10
                            }
                        }
                    ],
                    laserEmitters: [
                        {
                            position: {
                                row: 0,
                                cell: 8
                            },
                            direction: 'down'
                        }
                    ]
                }
            },
            // Level
            {
                levelID: 11,
                map: [
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                    [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                ],
                player: {
                    position: {
                        row: 5,
                        cell: 0
                    }
                },
                interactables: {
                    pushBlocks: [
                        {
                            type: 'default',
                            position: {
                                row: 2,
                                cell: 1
                            }
                        },
                        {
                            type: 'default',
                            position: {
                                row: 2,
                                cell: 4
                            }
                        },
                        {
                            type: 'laser',
                            position: {
                                row: 1,
                                cell: 8
                            },
                            orientation: 0
                        },
                    ],
                    exits: [
                        {
                            position: {
                                row: 5,
                                cell: 10
                            }
                        }
                    ],
                    laserEmitters: [
                        {
                            position: {
                                row: 5,
                                cell: 5
                            },
                            direction: 'up'
                        },
                        {
                            position: {
                                row: 1,
                                cell: 2
                            },
                            direction: 'down'
                        }
                    ]
                }
            },
            // Level
            {
                levelID: 12,
                map: [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
                    [2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
                    [1, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0],
                    [0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0],
                    
                ],
                player: {
                    position: {
                        row: 6,
                        cell: 10
                    }
                },
                interactables: {
                    pushBlocks: [
                        {
                            type: 'laser',
                            position: {
                                row: 2,
                                cell: 8
                            },
                            orientation: 0
                        },
                        {
                            type: 'default',
                            position: {
                                row: 4,
                                cell: 4
                            }
                        },
                        {
                            type: 'default',
                            position: {
                                row: 5,
                                cell: 6
                            }
                        },
                    ],
                    pushBlockHomes: [
                        {
                            position: {
                                row: 6,
                                cell: 10
                            }
                        }
                    ],
                    laserEmitters: [
                        {
                            position: {
                                row: 3,
                                cell: 9
                            },
                            direction: 'left'
                        }
                    ],
                    exits: [
                        {
                            position: {
                                row: 6,
                                cell: 0
                            }
                        }
                    ],
                }
            },
            // Level
            {
                levelID: 13,
                map: [
                    [1, 0, 0, 0, 0, 0, 0, 0, 1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [1, 0, 0, 0, 0, 0, 0, 0, 1],
                ],
                player: {
                    position: {
                        row: 4,
                        cell: 3
                    }
                },
                interactables: {
                    pushBlocks: [
                        {
                            type: 'default',
                            position: {
                                row: 3,
                                cell: 3
                            }
                        },
                        {
                            type: 'laser',
                            position: {
                                row: 1,
                                cell: 5
                            },
                            orientation: 0
                        },
                        {
                            type: 'laser',
                            position: {
                                row: 5,
                                cell: 5
                            },
                            orientation: 90
                        },
                        {
                            type: 'laser',
                            position: {
                                row: 1,
                                cell: 1
                            },
                            orientation: 270
                        },
                        {
                            type: 'laser',
                            position: {
                                row: 5,
                                cell: 1
                            },
                            orientation: 180
                        },
                    ],
                    pushBlockHomes: [
                        {
                            position: {
                                row: 2,
                                cell: 2
                            }
                        },
                        {
                            position: {
                                row: 4,
                                cell: 4
                            }
                        },
                        {
                            position: {
                                row: 4,
                                cell: 2
                            }
                        },
                        {
                            position: {
                                row: 2,
                                cell: 4
                            }
                        },
                        {
                            position: {
                                row: 3,
                                cell: 3
                            }
                        },
                    ],
                    exits: [
                        {
                            position: {
                                row: 3,
                                cell: 7
                            }
                        }
                    ]
                }
            },
            // Level
            {
                levelID: 14,
                map: [
                    [1, 0, 0, 0, 0, 0, 0, 0, 1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 1, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [1, 0, 0, 0, 0, 0, 0, 0, 1],
                ],
                player: {
                    position: {
                        row: 5,
                        cell: 4
                    }
                },
                interactables: {
                    pushBlocks: [
                        {
                            type: 'laserCapture',
                            position: {
                                row: 1,
                                cell: 4
                            }
                        }
                    ],
                    exits: [
                        {
                            position: {
                                row: 5,
                                cell: 4
                            }
                        }
                    ],
                    laserEmitters: [
                        {
                            position: {
                                row: 3,
                                cell: 6
                            },
                            direction: 'left'
                        }
                    ],
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
