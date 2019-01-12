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
        this.laser = new Laser(this);
        this.controls = new Controls(this);
        this.canvas = new Canvas(this);

        this.tickFrame = 0;
        this.lastTickUpdate = Date.now();
        this.delta = 0;

        this.nextLevelQueued = false;
    }

    run() {
        var _this = this;
        this.loop = setInterval(function() {_this.tick()}, 0);
    }

    tick() {
        var now = Date.now();
        this.delta = now - this.lastTickUpdate;
        this.lastTickUpdate = now;

        this.tickFrame++;
        this.move.move();
        this.canvas.drawFrame();

        if (this.nextLevelQueued) {
            this.loadNextLevel();
        }
    }

    queueNextLevel() {
        this.nextLevelQueued = true;
    }

    loadNextLevel() {
        this.nextLevelQueued = false;
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
        this.move = new Move(this);
        this.level = new Level(this, levelID);
        this.player = new Player(this);
        this.pushBlocks = new PushBlocks(this);
        this.exit = new Exit(this);
        this.laser = new Laser(this);
        this.canvas = new Canvas(this);
    }
}