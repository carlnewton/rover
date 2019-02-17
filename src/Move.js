class Move {

    constructor(game) {
        this.game = game;
        this.list = [];
    }

    add(entityType, entityID, direction) {
        var moveID = this.getNewID(),
            entry = {
                id: moveID,
                entityType: entityType,
                entityID: entityID,
                direction: direction
            };
        
        this.list.push(entry);
    }

    getNewID() {
        var highestID = 0;
        for (let entry of this.list) {
            if (entry.id > highestID) {
                highestID = entry.id;
            }
        }

        return highestID + 1;
    }

    move() {
        this.movePlayer();
        this.movePushBlocks();
    }

    movePlayer() {
        var movement = this.getEarliestMovement('player', 0);
        if (movement === undefined) {
            var lastDirection = this.game.controls.lastDirection;
            if (this.game.controls.directions.includes(lastDirection)) {
                this.add('player', 0, lastDirection);
            }
            return;
        }

        var playerMoved = this.game.player.move(movement.direction);

        if (playerMoved === true || playerMoved === false) {
            this.removeEntry(movement.id);
        }
    }

    movePushBlocks() {
        for (let pushBlockMovement of this.getEarliestPushBlockMovements()) {
            var pushBlockMoved = this.game.pushBlocks.moveBlock(pushBlockMovement.direction, pushBlockMovement.entityID);

            if (pushBlockMoved === true || pushBlockMoved === false) {
                this.removeEntry(pushBlockMovement.id);
            }
        }
    }

    getEarliestMovement(entityType, entityID) {
        for (let entry of this.list) {
            if (entry.entityType === entityType && entry.entityID === entityID) {
                return entry;
            }
        }
    }

    getEarliestPushBlockMovements() {
        var pushBlockIDs = [],
            pushBlockMovements = [];

        for (let entry of this.list) {
            if (entry.entityType === 'pushBlock' && !pushBlockIDs.includes(entry.entityID)) {
                pushBlockIDs.push(entry.entityID);
                pushBlockMovements.push(entry);
            }
        }
        return pushBlockMovements;
    }

    removeEntry(id) {
        var entryID = 0;
        for (let entry of this.list) {
            if (entry.id === id) {
                this.list.splice(entryID, 1);
                return true;
            }
            entryID++;
        }
    }

    clear() {
        this.list = [];
    }
}