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
        switch (key.keyCode) {
            // `w` or up arrow
            case 87:
            case 38:
                this.game.player.move('up');
                break;
            // `s` or down arrow
            case 83:
            case 40:
                this.game.player.move('down');
                break;
            // `a` or left arrow
            case 65:
            case 37:
                this.game.player.move('left');
                break;
            // `d` or right arrow
            case 68:
            case 39:
                this.game.player.move('right');
                break;
            // space bar
            case 32:
                this.game.restartLevel();
                break;
            // `]`
            case 221: // #todo remove this 
                this.game.loadNextLevel();
                break;
        } 
    }
}