class Controls {
    constructor(game) {
        this.game = game;
        this.listen();
        this.locked = false;
        this.pointer = {
            x: 0,
            y: 0
        };
    }

    listen() {
        var _this = this;
        window.addEventListener('keydown', function(key) {
            _this.keyDown(key);
        });

        window.addEventListener('click', function() {
            _this.click();
        });

        document.addEventListener('mousemove', function(event) {
            _this.pointer.x = event.clientX;
            _this.pointer.y = event.clientY;
        });
    }

    click() {
        if (this.game.editor.enabled) {
            this.game.editor.click();
        }
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
            // `f`
            case 70:
                this.fKey();
                break;
            // `n`
            case 78:
                this.nKey();
                break;
            // `p`
            case 80:
                this.pKey();
                break;
            // `e`
            case 69:
                this.eKey();
                break;
            // `l`
            case 76:
                this.lKey();
                break;
            // `h`
            case 72:
                this.hKey();
                break;
            // `b`
            case 66:
                this.bKey();
                break;
            // `x`
            case 88:
                this.xKey();
                break;
            // `r`
            case 82:
                this.rKey();
                break;
        } 
    }

    upKey() {
        if (this.game.paused === false) {
            if (this.game.editor.enabled) {
                this.game.editor.changeMapTile('wall');
                return;
            }
            this.game.move.add('player', 0, 'up');
        } else {
            this.game.menu.up();
        }
    }

    fKey() {
        if (this.game.paused === false) {
            if (this.game.editor.enabled) {
                this.game.editor.changeMapTile('floor');
                return;
            }
        }
    }

    nKey() {
        if (this.game.paused === false) {
            if (this.game.editor.enabled) {
                this.game.editor.changeMapTile('noBlockFloor');
                return;
            }
        }
    }

    pKey() {
        if (this.game.paused === false) {
            if (this.game.editor.enabled) {
                this.game.editor.changePlayerPosition();
                return;
            }
        }
    }

    rKey() {
        if (this.game.paused === false) {
            if (this.game.editor.enabled) {
                this.game.editor.rotateEntity();
                return;
            }
        }
    }

    xKey() {
        if (this.game.paused === false) {
            if (this.game.editor.enabled) {
                this.game.editor.removeEntities();
                return;
            }
        }
    }

    eKey() {
        if (this.game.paused === false) {
            if (this.game.editor.enabled) {
                this.game.editor.changeExitPosition();
                return;
            }
        }
    }

    lKey() {
        if (this.game.paused === false) {
            if (this.game.editor.enabled) {
                this.game.editor.addLaser();
                return;
            }
        }
    }

    hKey() {
        if (this.game.paused === false) {
            if (this.game.editor.enabled) {
                this.game.editor.addPushBlockHome();
                return;
            }
        }
    }

    bKey() {
        if (this.game.paused === false) {
            if (this.game.editor.enabled) {
                this.game.editor.addPushBlock();
                return;
            }
        }
    }

    downKey() {
        if (this.game.paused === false) {
            if (this.game.editor.enabled) {
                return;
            }
            this.game.move.add('player', 0, 'down');
        } else {
            this.game.menu.down();
        }
    }

    leftKey() {
        if (this.game.paused === false) {
            if (this.game.editor.enabled) {
                return;
            }
            this.game.move.add('player', 0, 'left');
        } else {
            this.game.menu.left();
        }
    }

    rightKey() {
        if (this.game.paused === false) {
            if (this.game.editor.enabled) {
                return;
            }
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