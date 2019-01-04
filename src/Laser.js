class Laser {
    constructor(game) {
        this.game = game;
        this.emitters = [];
        this.lasers = [];
        this.addEmitters();
        this.emitLasers();
    }

    addEmitters() {
        if (this.game.level.map.interactables === undefined || this.game.level.map.interactables.laserEmitters === undefined) {
            return false;
        }

        for (let emitter of this.game.level.map.interactables.laserEmitters) {
            emitter.id = this.emitters.length;
            this.emitters.push(emitter);
        }
    }

    emitLasers() {
        this.lasers = [];
        for (let emitter of this.emitters) {
            this.emitLaserFromEmitter(emitter.id);
        }
    }

    laserExists(row, cell) {
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