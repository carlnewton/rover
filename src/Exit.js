class Exit {
    constructor(game) {
        this.game = game;
        if (this.game.pushBlocks.allPushBlocksHome) {
            this.enable();
        } else {
            this.disable();
        }
    }

    found() {
        var playerPosition = this.game.player.position;

        if (this.enabled === false) {
            return false;
        }

        for (let exit of this.game.level.map.interactables.exits) {
            if (exit.position.row === playerPosition.row && exit.position.cell === playerPosition.cell) {
                return true;
            }
        }
    }
    
    enable() {
        this.enabled = true;
        this.tile = this.game.tiles.exitTiles[0];
    }

    disable() {
        this.enabled = false;
        this.tile = this.game.tiles.exitTiles[1];
    }
}