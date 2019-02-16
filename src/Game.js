class Game {
    constructor() {
        var levelID = 1;
        var urlParams = new URLSearchParams(window.location.search);
        var levelCode = urlParams.get('l');
        if (levelCode) {
            levelID = 0;
        }
        this.maps = new Maps(this);
        this.tiles = new Tiles();
        this.pushBlockTypes = new PushBlockTypes();
        this.timer = new Timer();

        this.stats = new Stats(this);
        this.move = new Move(this);
        this.encoder = new Encoder(this);
        this.level = new Level(this, levelID);
        this.player = new Player(this);
        this.pushBlocks = new PushBlocks(this);
        this.exit = new Exit(this);
        this.laser = new Laser(this);
        this.controls = new Controls(this);
        this.menus = new Menus(this);
        this.menu = new Menu(this);
        this.editor = new Editor(this);
        this.canvas = new Canvas(this);

        this.tickFrame = 0;
        this.lastTickUpdate = Date.now();
        this.delta = 0;
        this.paused = false;

        this.nextLevelQueued = false;

        this.level.initialise();
    }

    run() {
        var _this = this;
        this.loop = setInterval(function() {_this.tick()}, 0);
    }

    pause() {
        if (this.paused === false) {
            this.paused = true;
            this.menu.openMenu('pause');
        } else {
            this.paused = false;
            this.menu.closeMenu();
        }
    }

    tick() {
        var now = Date.now();
        this.delta = now - this.lastTickUpdate;
        this.lastTickUpdate = now;

        this.tickFrame++;

        this.canvas.drawFrame();

        if (this.editor.enabled) {
            this.editor.tick();
            return;
        }

        if (this.paused === false) {
            this.move.move();
        }
        
        if (this.nextLevelQueued) {
            this.loadNextLevel();
        }

        if (this.level.begin === true) {
            if (this.canvas.drawLevelBegin() === true) {
                this.level.begin = false;
            }
        }

        this.player.checkAlive();
    }

    queueNextLevel() {
        this.controls.locked = true;
        this.nextLevelQueued = true;
        this.stats.add();
    }

    loadNextLevel() {
        if (this.canvas.drawLevelComplete() !== true) {
            return;
        }
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
        this.menus = new Menus(this);
        this.menu = new Menu(this);
        this.canvas = new Canvas(this);

        this.controls.locked = false;
        this.level.initialise();
    }
}