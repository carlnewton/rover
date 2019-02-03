class Maps {
    constructor() {
        this.list = [
            // Level
            {
                levelID: 1,
                name: 'Hello, World!',
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
                name: 'What does the fox say?',
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
                name: 'Aye!',
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
                name: 'Derpy',
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
                name: 'Ninja',
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
                name: 'Hermit',
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
                name: 'Without a trace',
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
                name: 'Destroy them with lasers!',
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
                name: 'Clear a path',
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
                name: 'Scenic route',
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
                name: 'Push past the pain',
                map: [
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                    [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
                ],
                player: {
                    position: {
                        row: 4,
                        cell: 0
                    }
                },
                interactables: {
                    pushBlocks: [
                        {
                            type: 'default',
                            position: {
                                row: 1,
                                cell: 1
                            }
                        },
                        {
                            type: 'default',
                            position: {
                                row: 1,
                                cell: 4
                            }
                        },
                        {
                            type: 'laser',
                            position: {
                                row: 0,
                                cell: 8
                            },
                            orientation: 0
                        },
                    ],
                    exits: [
                        {
                            position: {
                                row: 4,
                                cell: 10
                            }
                        }
                    ],
                    laserEmitters: [
                        {
                            position: {
                                row: 4,
                                cell: 5
                            },
                            direction: 'up'
                        },
                        {
                            position: {
                                row: 0,
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
                name: 'Slider',
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
                name: 'The box',
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
                name: 'Diamonds and guns',
                map: [
                    [1, 1, 1, 1, 0, 1, 1, 1, 1],
                    [1, 1, 1, 0, 0, 0, 1, 1, 1],
                    [1, 1, 0, 0, 0, 0, 0, 1, 1],
                    [1, 0, 0, 1, 0, 1, 0, 0, 1],
                    [0, 0, 1, 0, 0, 0, 0, 0, 0],
                    [1, 0, 0, 1, 0, 1, 0, 0, 1],
                    [1, 1, 0, 0, 0, 0, 0, 1, 1],
                    [1, 1, 1, 0, 0, 0, 1, 1, 1],
                    [1, 1, 1, 1, 0, 1, 1, 1, 1],
                ],
                player: {
                    position: {
                        row: 6,
                        cell: 4
                    }
                },
                interactables: {
                    pushBlocks: [
                        {
                            type: 'laserCapture',
                            position: {
                                row: 2,
                                cell: 4
                            }
                        }
                    ],
                    exits: [
                        {
                            position: {
                                row: 6,
                                cell: 4
                            }
                        }
                    ],
                    laserEmitters: [
                        {
                            position: {
                                row: 4,
                                cell: 6
                            },
                            direction: 'left'
                        }
                    ],
                }
            },
            // Level
            {
                levelID: 15,
                name: 'Simple',
                map: [
                    [0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0],
                    [1, 0, 0, 0, 0, 0, 0],
                    [1, 0, 0, 0, 0, 0, 1],
                    [1, 0, 0, 0, 0, 0, 1],
                    [1, 1, 0, 0, 0, 0, 1],
                    [1, 1, 0, 0, 0, 1, 1],
                ],
                player: {
                    position: {
                        row: 5,
                        cell: 3
                    }
                },
                interactables: {
                    pushBlocks: [
                        {
                            type: 'laserCapture',
                            position: {
                                row: 2,
                                cell: 1
                            }
                        },
                        {
                            type: 'laser',
                            position: {
                                row: 3,
                                cell: 5
                            },
                            orientation: 90
                        },
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
                                row: 5,
                                cell: 3
                            }
                        }
                    ],
                }
            },
            // Level
            {
                levelID: 16,
                name: 'A problem shared...',
                map: [
                    [1, 1, 0, 0, 0, 0, 0, 1],
                    [0, 0, 0, 0, 0, 0, 0, 1],
                    [0, 0, 2, 0, 0, 0, 0, 1],
                    [0, 1, 0, 0, 1, 0, 0, 0],
                    [0, 0, 0, 0, 1, 0, 0, 0],
                    [0, 0, 0, 0, 1, 0, 0, 0],
                ],
                player: {
                    position: {
                        row: 4,
                        cell: 6
                    }
                },
                interactables: {
                    pushBlocks: [
                        {
                            type: 'laserCapture',
                            position: {
                                row: 1,
                                cell: 1
                            }
                        },
                        {
                            type: 'laserCapture',
                            position: {
                                row: 2,
                                cell: 1
                            }
                        },
                        {
                            type: 'laser',
                            position: {
                                row: 2,
                                cell: 6
                            },
                            orientation: 90
                        },
                    ],
                    laserEmitters: [
                        {
                            position: {
                                row: 5,
                                cell: 0
                            },
                            direction: 'right'
                        }
                    ],
                    exits: [
                        {
                            position: {
                                row: 4,
                                cell: 1
                            }
                        }
                    ],
                }
            },
            // Level
            {
                levelID: 17,
                name: 'Upon reflection...',
                map: [
                    [1, 1, 1, 1, 0, 1, 1, 1, 1],
                    [1, 0, 0, 0, 0, 0, 0, 0, 1],
                    [1, 0, 0, 0, 0, 0, 0, 0, 1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 1],
                    [1, 0, 0, 0, 0, 0, 0, 0, 1],
                    [1, 0, 0, 0, 0, 0, 0, 0, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1]
                ],
                player: {
                    position: {
                        row: 4,
                        cell: 6
                    }
                },
                interactables: {
                    pushBlocks: [
                        {
                            type: 'laserCapture',
                            position: {
                                row: 0,
                                cell: 4
                            }
                        },
                        {
                            type: 'laser',
                            position: {
                                row: 3,
                                cell: 0
                            },
                            orientation: 270
                        },
                        {
                            type: 'mirror',
                            position: {
                                row: 4,
                                cell: 2
                            },
                            orientation: 90
                        },
                    ],
                    exits: [
                        {
                            position: {
                                row: 4,
                                cell: 6
                            }
                        }
                    ],
                }
            },
            // Level
            {
                levelID: 18,
                name: 'Wraparound',
                map: [
                    [0, 0, 0, 1, 0, 2, 1, 1, 1],
                    [0, 0, 0, 0, 0, 0, 0, 1, 1],
                    [0, 0, 1, 1, 0, 0, 0, 0, 1],
                    [0, 0, 1, 1, 1, 0, 0, 0, 1],
                    [0, 0, 0, 1, 1, 1, 1, 1, 1],
                    [0, 0, 0, 0, 0, 0, 0, 1, 1],
                    [2, 0, 1, 0, 0, 0, 0, 0, 0],
                    [2, 1, 1, 1, 1, 1, 1, 1, 2],
                    [0, 2, 2, 2, 2, 2, 2, 2, 0],
                ],
                player: {
                    position: {
                        row: 0,
                        cell: 5
                    }
                },
                interactables: {
                    pushBlocks: [
                        {
                            type: 'default',
                            position: {
                                row: 1,
                                cell: 5
                            },
                            orientation: 0
                        },
                        {
                            type: 'laserCapture',
                            position: {
                                row: 6,
                                cell: 4
                            }
                        },
                        {
                            type: 'laser',
                            position: {
                                row: 6,
                                cell: 1
                            },
                            orientation: 180
                        },
                        {
                            type: 'mirror',
                            position: {
                                row: 1,
                                cell: 1
                            },
                            orientation: 0
                        },
                        {
                            type: 'mirror',
                            position: {
                                row: 2,
                                cell: 5
                            },
                            orientation: 270
                        },
                        {
                            type: 'mirror',
                            position: {
                                row: 8,
                                cell: 0
                            },
                            orientation: 180
                        },
                        {
                            type: 'mirror',
                            position: {
                                row: 8,
                                cell: 8
                            },
                            orientation: 90
                        },
                        {
                            type: 'mirror',
                            position: {
                                row: 6,
                                cell: 8
                            },
                            orientation: 0
                        },
                    ],
                    exits: [
                        {
                            position: {
                                row: 6,
                                cell: 6
                            }
                        }
                    ],
                }
            },
            // Level
            {
                levelID: 19,
                name: 'Bypass',
                map: [
                    [1, 0, 0, 0, 0, 0, 0, 0, 1],
                    [1, 0, 0, 0, 0, 0, 0, 0, 1],
                    [1, 0, 0, 0, 0, 0, 0, 0, 1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [1, 0, 0, 0, 0, 0, 0, 0, 1],
                    [1, 0, 0, 0, 0, 0, 0, 0, 1],
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
                                row: 3,
                                cell: 8
                            }
                        },
                        {
                            type: 'laser',
                            position: {
                                row: 3,
                                cell: 0
                            },
                            orientation: 270
                        },
                        {
                            type: 'mirror',
                            position: {
                                row: 5,
                                cell: 6
                            },
                            orientation: 90
                        },
                        {
                            type: 'mirror',
                            position: {
                                row: 1,
                                cell: 6
                            },
                            orientation: 0
                        },
                        {
                            type: 'mirror',
                            position: {
                                row: 1,
                                cell: 2
                            },
                            orientation: 270
                        },
                        {
                            type: 'mirror',
                            position: {
                                row: 5,
                                cell: 2
                            },
                            orientation: 180
                        },
                    ],
                    exits: [
                        {
                            position: {
                                row: 1,
                                cell: 4
                            }
                        }
                    ],
                }
            },
            // Level
            {
                levelID: 20,
                name: 'Toggle',
                map: [
                    [0, 2, 2, 2, 0, 1, 1, 0, 0],
                    [2, 2, 2, 2, 2, 0, 0, 0, 0],
                    [2, 2, 0, 0, 2, 0, 0, 0, 0],
                    [0, 2, 0, 2, 0, 0, 0, 0, 0],
                    [1, 1, 1, 0, 1, 1, 1, 0, 1],
                    [1, 0, 0, 0, 0, 1, 0, 0, 0],
                    [1, 0, 0, 0, 0, 0, 0, 0, 0],
                    [1, 0, 0, 0, 0, 1, 0, 0, 0],
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
                            type: 'laserCapture',
                            position: {
                                row: 3,
                                cell: 8
                            }
                        },
                        {
                            type: 'laser',
                            position: {
                                row: 2,
                                cell: 2
                            },
                            orientation: 0
                        },
                        {
                            type: 'mirror',
                            position: {
                                row: 0,
                                cell: 0
                            },
                            orientation: 270
                        },
                        {
                            type: 'mirror',
                            position: {
                                row: 0,
                                cell: 4
                            },
                            orientation: 0
                        },
                        {
                            type: 'mirror',
                            position: {
                                row: 3,
                                cell: 0
                            },
                            orientation: 180
                        },
                        {
                            type: 'mirror',
                            position: {
                                row: 3,
                                cell: 2
                            },
                            orientation: 90
                        },
                        {
                            type: 'mirror',
                            position: {
                                row: 3,
                                cell: 4
                            },
                            orientation: 180
                        },
                        {
                            type: 'mirror',
                            position: {
                                row: 2,
                                cell: 5
                            },
                            orientation: 270
                        },
                        {
                            type: 'mirror',
                            position: {
                                row: 2,
                                cell: 6
                            },
                            orientation: 90
                        },
                        {
                            type: 'mirror',
                            position: {
                                row: 2,
                                cell: 7
                            },
                            orientation: 180
                        },
                    ],
                    exits: [
                        {
                            position: {
                                row: 0,
                                cell: 8
                            }
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
