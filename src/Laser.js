class Laser {
    constructor(game) {
        this.game = game;
        this.emitters = [];
        this.lasers = [];
        this.addEmitters();
        this.updateEmitterPushBlocks();
        this.emitLasers();
    }

    addEmitters() {
        this.emitters = [];
        if (this.game.level.map.interactables === undefined || this.game.level.map.interactables.laserEmitters === undefined) {
            return false;
        }

        for (let emitter of this.game.level.map.interactables.laserEmitters) {
            emitter.id = this.getNewEmitterID();
            emitter.type = 'static';
            this.emitters.push(emitter);
        }
    }

    removeEmittersByType(type) {
        var emitterID = this.emitters.length
        while (emitterID--) {
            if (this.emitters[emitterID].type === 'pushBlock') {
                this.emitters.splice(emitterID, 1);
            }
        }
    }

    getNewEmitterID() {
        var highestID = 0;
        for (let emitter of this.emitters) {
            if (emitter.id > highestID) {
                highestID = emitter.id;
            }
        }

        return highestID + 1;
    }

    updateEmitterPushBlocks() {
        this.removeEmittersByType('pushBlock');
        for (let pushBlock of this.game.pushBlocks.list) {
            if (pushBlock.tile.name === 'laser') {
                var direction = 'down';
                switch (pushBlock.orientation) {
                    case 0:
                        direction = 'down';
                        break;
                    case 90:
                        direction = 'left';
                        break;
                    case 180:
                        direction = 'up';
                        break;
                    case 270:
                        direction = 'right';
                        break;
                }
                this.emitters.push(
                    {
                        id: this.getNewEmitterID(),
                        type: 'pushBlock',
                        position: {
                            row: pushBlock.row,
                            cell: pushBlock.cell
                        },
                        direction: direction
                    },
                );
            }
        }
    }

    emitLasers() {
        this.game.pushBlocks.deactivateAll();
        this.lasers = [];
        for (let emitter of this.emitters) {
            this.emitLaserFromEmitter(emitter.id);
        }
    }

    laserExists(row, cell) {
        this.updateEmitterPushBlocks();
        this.emitLasers();

        for (let laser of this.lasers) {
            if (laser.row === row && laser.cell === cell) {
                return true;
            }
        }
    }

    emitLaserFromEmitter(emitterID) {
        var emitter = this.getEmitterByID(emitterID);
        this.emitLaserFrom(emitter.position.row, emitter.position.cell, emitter.direction);
    }

    emitLaserFrom(row, cell, direction) {
        switch (direction) {
            case 'down':
                row += 1;
                break;
            case 'up':
                row -= 1;
                break;
            case 'left':
                cell -= 1;
                break;
            case 'right':
                cell += 1;
                break;
        }

        if (!this.game.level.locationAvailable(row, cell, 'laser')) {
            var pushBlock = this.game.pushBlocks.getBlockByLocation(row, cell);

            if (pushBlock !== undefined) {
                if (pushBlock.tile.name === 'laserCapture') {
                    pushBlock.active = true;
                }

                if (pushBlock.tile.name === 'mirror') {
                    if ((direction === 'up' || direction === 'right') && pushBlock.orientation === 0) {
                        pushBlock.active = true;
                        if (direction === 'right') {
                            this.emitLaserFrom(row, cell, 'down')
                        } else if (direction === 'up') {
                            this.emitLaserFrom(row, cell, 'left')
                        }
                    } else if ((direction === 'down' || direction === 'right') && pushBlock.orientation === 90) {
                        pushBlock.active = true;
                        if (direction === 'right') {
                            this.emitLaserFrom(row, cell, 'up')
                        } else if (direction === 'down') {
                            this.emitLaserFrom(row, cell, 'left')
                        }
                    } else if ((direction === 'down' || direction === 'left') && pushBlock.orientation === 180) {
                        pushBlock.active = true;
                        if (direction === 'left') {
                            this.emitLaserFrom(row, cell, 'up')
                        } else if (direction === 'down') {
                            this.emitLaserFrom(row, cell, 'right')
                        }
                    } else if ((direction === 'up' || direction === 'left') && pushBlock.orientation === 270) {
                        pushBlock.active = true;
                        if (direction === 'left') {
                            this.emitLaserFrom(row, cell, 'down')
                        } else if (direction === 'up') {
                            this.emitLaserFrom(row, cell, 'right')
                        }
                    }
                }
            }

            return false;
        }

        this.lasers.push(
            {
                row: row,
                cell: cell,
                direction: direction
            }
        )

        this.emitLaserFrom(row, cell, direction);
    }

    getEmitterByID(emitterID) {
        for (let emitter of this.emitters) {
            if (emitter.id === emitterID) {
                return emitter;
            }
        }
    }
}