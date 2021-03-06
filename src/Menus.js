class Menus {
    constructor(game) {
        this.game = game;
        this.items = [
            {
                title: 'pause',
                items: [
                    {
                        title: 'Resume',
                        action: 'resume'
                    },
                    {
                        title: 'Restart',
                        action: 'restart'
                    },
                    {
                        title: 'Level select',
                        action: 'levelSelect'
                    },
                    {
                        title: 'Level editor',
                        action: 'levelEditor'
                    }
                ]
            },
            {
                title: 'levelSelect',
                items: [
                    {
                        title: 'Back',
                        action: 'back'
                    }
                ]
            },
            {
                title: 'editor',
                items: [
                    {
                        title: 'Return to editor',
                        action: 'edit',
                    },
                    {
                        title: 'Play',
                        action: 'play',
                    },
                    {
                        title: 'Exit',
                        action: 'exit',
                    }
                ]
            }
        ]

        this.populateLevels();
    }

    populateLevels() {
        var menu = this.getMenu('levelSelect');
        for (let level of this.game.maps.list) {
            menu.items.push(
                {
                    title: level.levelID + '. ' + level.name,
                    action: level.levelID
                }
            );
        }
    }

    getMenu(title) {
        for (let item of this.items) {
            if (item.title === title) {
                return item;
            }
        }
    }
}