class Controls {
    constructor(game) {
        this.game = game;
        this.listen();
        this.locked = false;
        this.pointer = {
            x: 0,
            y: 0
        };
        this.directions = [];
        this.lastDirection = null;
    }

    listen() {
        var _this = this;
        window.addEventListener('keydown', function(key) {
            _this.keyDown(key);
        });

        window.addEventListener('keyup', function(key) {
            _this.keyUp(key);
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

    keyUp(key) {
        switch (key.keyCode) {
            // `w` or up arrow
            case 87:
            case 38:
                for(var direction = 0; direction < this.directions.length; direction++){ 
                   if (this.directions[direction] === 'up') {
                     this.directions.splice(direction, 1); 
                   }
                }
                break;
            // `s` or down arrow
            case 83:
            case 40:
                for(var direction = 0; direction < this.directions.length; direction++){ 
                   if (this.directions[direction] === 'down') {
                     this.directions.splice(direction, 1); 
                   }
                }
                break;
            // `a` or left arrow
            case 65:
            case 37:
                for(var direction = 0; direction < this.directions.length; direction++){ 
                   if (this.directions[direction] === 'left') {
                     this.directions.splice(direction, 1); 
                   }
                }
                break;
            // `d` or right arrow
            case 68:
            case 39:
                for(var direction = 0; direction < this.directions.length; direction++){ 
                   if (this.directions[direction] === 'right') {
                     this.directions.splice(direction, 1); 
                   }
                }
                break;
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
                if (this.game.paused === false && this.game.editor.enabled === false) {
                    this.lastDirection = 'up';
                    if (!this.directions.includes('up')) {
                        this.directions.push('up')
                    }
                } else {
                    this.upKey();
                }
                break;
            // `s` or down arrow
            case 83:
            case 40:
                if (this.game.paused === false && this.game.editor.enabled === false) {
                    this.lastDirection = 'down';
                    if (!this.directions.includes('down')) {
                        this.directions.push('down')
                    }
                } else {
                    this.downKey();
                }
                break;
            // `a` or left arrow
            case 65:
            case 37:
                if (this.game.paused === false && this.game.editor.enabled === false) {
                    this.lastDirection = 'left';
                    if (!this.directions.includes('left')) {
                        this.directions.push('left')
                    }
                } else {
                    this.leftKey();
                }
                break;
            // `d` or right arrow
            case 68:
            case 39:
                if (this.game.paused === false && this.game.editor.enabled === false) {
                    this.lastDirection = 'right';
                    if (!this.directions.includes('right')) {
                        this.directions.push('right')
                    }
                } else {
                    this.rightKey();
                }
                break;
            // space bar
            case 32:
                this.spacebarKey();
                break;
            // return key
            case 13:
                this.returnKey();
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
            // `c`
            case 67:
                this.cKey();
                break;
        } 
    }

    upKey() {
        if (this.game.paused === false) {
            if (this.game.editor.enabled) {
                this.game.editor.changeMapTile('wall');
                return;
            }
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

    cKey() {
        switch (this.game.controlHints) {
            case 'init':
                this.game.controlHints = 'display';
                break;
            case 'display':
                this.game.controlHints = 'init';
                break;
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
        } else {
            this.game.menu.down();
        }
    }

    leftKey() {
        if (this.game.paused === false) {
            if (this.game.editor.enabled) {
                return;
            }
        } else {
            this.game.menu.left();
        }
    }

    rightKey() {
        if (this.game.paused === false) {
            if (this.game.editor.enabled) {
                return;
            }
        } else {
            this.game.menu.right();
        }
    }

    spacebarKey() {
        if (this.game.paused === false) {
            if (!this.game.editor.enabled) {
                this.game.restartLevel();
            } else {
                this.game.editor.play();
            }
        } else {
            this.game.menu.action();
        }
    }

    returnKey() {
        this.spacebarKey();
    }

    escapeKey() {
        if (this.game.paused === false) {
            this.game.pause();
        } else {
            this.game.menu.escape();
        }
    }
}