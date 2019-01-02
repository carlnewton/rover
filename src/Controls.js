class Controls {
    constructor(game) {
        this.game = game;
        this.listen();
    }

    listen() {
        var _this = this;
        window.addEventListener('keydown', function(key) {
            _this.keyDown(key);
        });
    }

    keyDown(key) {
        switch (key.key.toUpperCase()) {
            case 'W':
                this.game.player.move('up');
                break;
            case 'S':
                this.game.player.move('down');
                break;
            case 'A':
                this.game.player.move('left');
                break;
            case 'D':
                this.game.player.move('right');
                break;
            case ' ':
                this.game.restartLevel();
                break;
            case ']': // #todo remove this 
                this.game.loadNextLevel();
                break;
        } 
    }
}