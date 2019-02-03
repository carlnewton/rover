class Controls {
    constructor(game) {
        this.game = game;
        this.listen();
        this.locked = false;
    }

    listen() {
        var _this = this;
        window.addEventListener('keydown', function(key) {
            _this.keyDown(key);
        });
    }

    keyDown(key) {
        if (this.locked === true) {
            return;
        }

        switch (key.keyCode) {
            // `w` or up arrow
            case 87:
            case 38:
                this.upKey();
                break;
            // `s` or down arrow
            case 83:
            case 40:
                this.downKey();
                break;
            // `a` or left arrow
            case 65:
            case 37:
                this.leftKey();
                break;
            // `d` or right arrow
            case 68:
            case 39:
                this.rightKey();
                break;
            // space bar
            case 32:
                this.spacebarKey();
                break;
            // escape
            case 27:
                this.escapeKey();
                break;
        } 
    }

    upKey() {
        if (this.game.paused === false) {
            this.game.move.add('player', 0, 'up');
        } else {
            this.game.menu.up();
        }
    }

    downKey() {
        if (this.game.paused === false) {
            this.game.move.add('player', 0, 'down');
        } else {
            this.game.menu.down();
        }
    }

    leftKey() {
        if (this.game.paused === false) {
            this.game.move.add('player', 0, 'left');
        } else {
            this.game.menu.left();
        }
    }

    rightKey() {
        if (this.game.paused === false) {
            this.game.move.add('player', 0, 'right');
        } else {
            this.game.menu.right();
        }
    }

    spacebarKey() {
        if (this.game.paused === false) {
            this.game.pause();
        } else {
            this.game.menu.action();
        }
    }

    escapeKey() {
        if (this.game.paused === false) {
            this.game.pause();
        } else {
            this.game.menu.escape();
        }
    }
}