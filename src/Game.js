class Game {
    constructor() {
        this.maps = new Maps();
        this.tiles = new Tiles();
        this.pushBlockTypes = new PushBlockTypes();

        this.move = new Move(this);
        this.level = new Level(this);
        this.player = new Player(this);
        this.pushBlocks = new PushBlocks(this);
        this.exit = new Exit(this);
        this.controls = new Controls(this);
        this.canvas = new Canvas(this);

        this.tickFrame = 0;
    }

    run() {
        var _this = this;
        this.loop = setInterval(function() {_this.tick()}, 42);
    }

    tick() {
        this.tickFrame++;
        this.canvas.drawFrame();
    }

    loadNextLevel() {
        var nextLevelID = this.level.map.levelID + 1;
        if (!this.maps.getByLevelID(nextLevelID)) {
            nextLevelID = 1;
        }

        this.loadLevel(nextLevelID);
    }

    restartLevel() {
        this.loadLevel(this.level.map.levelID);
    }

    loadLevel(levelID) {
        this.level = new Level(this, levelID);
        this.player = new Player(this);
        this.pushBlocks = new PushBlocks(this);
        this.exit = new Exit(this);
        this.canvas = new Canvas(this);
    }
}