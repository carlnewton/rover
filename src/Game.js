class Game {
    constructor() {
        this.maps = new Maps();
        this.tiles = new Tiles();
        this.pushBlockTypes = new PushBlockTypes();

        this.level = new Level(this);
        this.player = new Player(this);
        this.pushBlocks = new PushBlocks(this);
        this.controls = new Controls(this);
        this.canvas = new Canvas(this);
    }

    run() {
        var _this = this;
        this.loop = setInterval(function() {_this.tick()}, 42);
    }

    tick() {
        this.canvas.drawFrame();
    }
}