class PushBlock {
    constructor(id, row, cell, tile, orientation = 0) {
        this.id = id;
        this.row = row;
        this.cell = cell;
        this.nextRow = null;
        this.nextCell = null;
        this.tile = tile;
        this.orientation = orientation;
    }
}