class Menu {
    constructor(game) {
        this.game = game;
        this.open = false;
        this.selectedItem = 0;
        this.menu = {};
    }

    openMenu(menu) {
        this.open = true;
        if (menu === 'pause' && this.game.editor.enabled === true) {
            this.menu = this.game.menus.getMenu('editor');
        } else {
            this.menu = this.game.menus.getMenu(menu);
        }
    }

    closeMenu() {
        this.menu = {};
        this.open = false;
    }

    up() {
        if (this.menu.title === 'levelSelect') {
            this.selectedItem = 0;

            return;
        }

        if (this.selectedItem === 0) {
            this.selectedItem = this.menu.items.length - 1;
        } else {
            this.selectedItem -= 1;
        }        
    }

    down() {
        if (this.menu.title === 'levelSelect') {
            if (this.selectedItem === 0) {
                this.selectedItem = 1;

                return;
            }
        }

        if (this.selectedItem === this.menu.items.length - 1) {
            this.selectedItem = 0;
        } else {
            this.selectedItem += 1;
        }
    }

    action() {
        switch(this.menu.title) {
            case 'pause':
                switch(this.menu.items[this.selectedItem].action) {
                    case 'resume':
                        if (this.game.editor.enabled = true) {
                            this.game.restartLevel();
                        }
                        this.game.editor.enabled = false;
                        this.game.pause();
                        break;
                    case 'restart':
                        this.game.pause();
                        this.game.restartLevel();
                        break;
                    case 'levelSelect':
                        var currentLevel = this.game.level.map.levelID;
                        this.switchMenu('levelSelect', currentLevel);
                        break;
                    case 'levelEditor':
                        this.game.editor.enabled = true;
                        this.game.editor.start();
                        this.game.pause();
                }
                break;
            case 'levelSelect':
                switch(this.menu.items[this.selectedItem].action) {
                    case 'back':
                        this.switchMenu('pause', 2);
                        break;
                    default:
                        var levelID = this.menu.items[this.selectedItem].action;
                        this.game.pause();
                        this.game.loadLevel(levelID);
                        break;
                }
                break;
            case 'editor':
                switch(this.menu.items[this.selectedItem].action) {
                    case 'exit':
                        this.switchMenu('pause')
                        break;
                    case 'edit':
                        this.game.pause();
                        break;
                    case 'play':
                        window.location.href = '?l=' + this.game.encoder.encode(this.game.level.map);
                }
                break;
        }
    }

    switchMenu(menu, selectedItem = 0) {
        this.selectedItem = selectedItem;
        this.menu = this.game.menus.getMenu(menu);
    }

    left() {
        if (this.menu.title === 'levelSelect') {
            if (this.selectedItem === 0) {
                return;
            }

            if (this.selectedItem === 1) {
                this.selectedItem = this.menu.items.length - 1;
            } else {
                this.selectedItem -= 1;
            }
        }
    }

    right() {
        if (this.menu.title === 'levelSelect') {
            if (this.selectedItem === this.menu.items.length - 1) {
                this.selectedItem = 1;
            } else {
                this.selectedItem += 1;
            }
        }
    }

    escape() {
        if (this.menu.title !== 'pause') {
            this.switchMenu('pause', 2);
        } else {
            this.game.pause();
        }
    }
}