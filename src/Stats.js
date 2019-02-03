class Stats {
    constructor(game) {
        this.game = game;

        this.levels = [];
    }

    add() {
        var level = this.levels[this.game.level.map.levelID];
        var time = Date.now() - this.game.level.startTime;

        if (level === undefined) {
            this.levels[this.game.level.map.levelID] = {
                moves: this.game.level.moves,
                time: time
            };
            return;
        }

        if (level.moves > this.game.level.moves) {
            level.moves = this.game.level.moves;
        }

        if (level.time > time) {
            level.time = time;
        }
    }
}