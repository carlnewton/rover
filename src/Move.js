class Move {
    constructor(game) {
        this.game = game;
        this.list = [];
    }

    add(entityType, entityID, fromRow, fromCell, toRow, toCell, speed) {
        if (fromRow === toRow && fromCell === toCell) {
            return false;
        }

        if (fromRow !== toRow && fromCell !== toCell) {
            return false
        }

        var queued = false;
        if (this.isMoving(entityType, entityID)) {
            queued = true;
        }

        var entryID = this.list.length,
            entry = new MoveEntry(
                entryID,
                this.game.tickFrame,
                entityType,
                entityID,
                fromRow,
                fromCell,
                toRow,
                toCell,
                speed,
                queued
            );
        this.list.push(entry);
    }

    getCurrentPosition(entityType, entityID) {
        var entry = this.getEarliestMovement(entityType, entityID);

        if (entry === undefined) {
            return false;
        }

        var currentFrame = this.game.tickFrame,
            framesPassed = currentFrame - entry.frame,
            percentage = entry.speed * framesPassed;

        if (percentage + entry.speed >= 100) {
            this.removeEntry(entry.id);
        }        

        return {
            fromRow: entry.fromRow,
            fromCell: entry.fromCell,
            toRow: entry.toRow,
            toCell: entry.toCell,
            percentage: percentage
        }
    }

    isMoving(entityType, entityID) {
        if (this.getCurrentPosition(entityType, entityID) === false) {
            return false;
        }

        return true;
    }

    getEarliestMovement(entityType, entityID) {
        for (let entry of this.list) {
            if (entry.entityType === entityType && entry.entityID === entityID) {
                return entry;
            }
        }
    }

    unqueueEarliestMovement(entityType, entityID) {
        for (let entry of this.list) {
            if (entry.entityType === entityType && entry.entityID === entityID && entry.queued === true) {
                entry.queued = false;
                entry.frame = this.game.tickFrame;

                return true;
            }
        }
    }

    removeEntry(id) {
        for(var entryID = 0; entryID < this.list.length; entryID++) {
            var entry = this.list[entryID];
            if(entry.id == id) {
                this.list.splice(entryID, 1);
                this.unqueueEarliestMovement(entry.entityType, entry.entityID);

                return true;
            }
        }
    }
}