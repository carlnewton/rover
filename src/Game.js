class Game {
    constructor() {
        this.maps = new Maps();
        this.tiles = new Tiles();
        this.pushBlockTypes = new PushBlockTypes();

        this.move = new Move(this);
        this.level = new Level(this);
        this.player = new Player(this);
        this.pushBlocks = new PushBlocks(this);
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
}