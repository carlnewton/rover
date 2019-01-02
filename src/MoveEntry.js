class MoveEntry {
    constructor (id, frame, entityType, entityID, fromRow, fromCell, toRow, toCell, speed, queued) {
        this.id = id;
        this.frame = frame;
        this.entityType = entityType;
        this.entityID = entityID;
        this.fromRow = fromRow;
        this.fromCell = fromCell;
        this.toRow = toRow;
        this.toCell = toCell;
        this.speed = speed;
        this.queued = queued;
    }
}