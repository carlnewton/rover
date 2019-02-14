class Encoder {

    constructor(game) {
        this.game = game;
    }

    encode(level) {
        /* 
         * a = separator
         * p = player
         * e = exit
         * x = times
         * l = laser
         */
        var mapString = level.map[0].length + 'a',
            previousTile = null,
            sameTileRun = 0,
            first = true;
        for (var row = 0; row < level.map.length; row++) {
            for (var cell = 0; cell <= level.map[row].length; cell++) {

                if (cell === level.map[row].length && row + 1 < level.map.length) {
                    continue;
                }

                var tile = level.map[row][cell],
                    tileEntities = this.getEntitiesAtTile(level, row, cell);

                if (
                    (previousTile === tile 
                    || previousTile === null)
                    && tileEntities.length === 0
                ) {
                    sameTileRun++;
                } else {
                    if (first === true) {
                        first = false;
                        sameTileRun -= 1;
                    }
                    if (sameTileRun < 0) {

                    } else if (sameTileRun === 0) {
                        mapString += previousTile;
                    } else if (sameTileRun <= 3) {
                        mapString += previousTile.toString().repeat(sameTileRun + 1);
                    } else {
                        mapString += previousTile + 'x' + (sameTileRun + 1) + 'a';
                    }

                    for (let tileEntity of tileEntities) {
                        mapString += tileEntity;
                    }
                    
                    sameTileRun = 0;
                }

                previousTile = tile
            }
        }

        return mapString;
    }

    decode(levelString) {
        var mapWidth = /^[0-9]+/.exec(levelString)[0],
            player = {
                position: {
                    row: null,
                    cell: null
                }
            },
            exit = {
                position: {
                    row: null,
                    cell: null
                }
            },
            pushBlocks = [],
            pushBlockHomes = [],
            laserEmitters = [];

        levelString = levelString.slice(mapWidth.length + 1);
        while (levelString.includes('x')) {
            var counter = /([0-9])\x([0-9]+)/.exec(levelString)
            levelString = levelString.slice(0, counter.index) + counter[1].repeat(counter[2]) + levelString.slice(counter.index + counter.length + 1);
        }

        var map = [],
            row = [],
            cellCount = 0,
            rowCount = 0;

        while (levelString.length > 0) {
            var character = levelString[0];
            if (isNaN(character)) {
                if (character === 'a') {
                    levelString = levelString.slice(1);
                    continue
                } else if (character === 'p') {
                    player.position.row = rowCount;
                    player.position.cell = cellCount;
                    levelString = levelString.slice(1);
                } else if (character === 'e') {
                    exit.position.row = rowCount;
                    exit.position.cell = cellCount;
                    levelString = levelString.slice(1);
                } else if (character === 'b') {
                    var nextCharacter = levelString[1],
                        type = 'default',
                        orientation = 0;
                    switch (nextCharacter) {
                        case 'l':
                        case 'm':
                            if (nextCharacter == 'l') {
                                type = 'laser';
                            } else {
                                type = 'mirror';
                            }
                            var nextNextCharacter = levelString[2];
                            switch (nextNextCharacter) {
                                case 'l':
                                    orientation = 90;
                                    break;
                                case 'u':
                                    orientation = 180;
                                    break;
                                case 'r':
                                    orientation = 270;
                                    break;
                            }
                            break;
                        case 'c':
                            type = 'laserCapture';
                            break;
                    }
                    if (type == 'default') {
                        levelString = levelString.slice(1);
                    } else if (orientation == 0) {
                        levelString = levelString.slice(2);
                    } else {
                        levelString = levelString.slice(3);
                    }

                    pushBlocks.push({
                        position: {
                            row: rowCount,
                            cell: cellCount
                        },
                        orientation: orientation,
                        type: type
                    });
                } else if (character === 'h') {
                    pushBlockHomes.push({
                        position: {
                            row: rowCount,
                            cell: cellCount
                        }
                    });
                    levelString = levelString.slice(1);
                } else if (character === 'l') {
                    var nextCharacter = levelString[1],
                        direction = 'down';
                    switch (nextCharacter) {
                        case 'l':
                            direction = 'left';
                            break;
                        case 'r':
                            direction = 'right';
                            break;
                        case 'u':
                            direction = 'up';
                            break;
                    }
                    if (direction == 'down') {
                        levelString = levelString.slice(1);
                    } else {
                        levelString = levelString.slice(2);
                    }

                    laserEmitters.push({
                        position: {
                            row: rowCount,
                            cell: cellCount
                        },
                        direction: direction
                    });
                }

                if (isNaN(levelString[0])) {
                    continue;
                }
            }

            row.push(parseInt(levelString[0]));

            levelString = levelString.slice(1);

            if (cellCount + 1 == mapWidth) {
                map.push(JSON.parse(JSON.stringify(row)));
                row = [];
                rowCount++;
                cellCount = 0;
            } else {
                cellCount++;
            }
        }
        
        var level = {
            map: map,
            player: player,
            interactables: {
                exits: [exit],
            }
        };

        if (pushBlocks.length > 0) {
            level.interactables.pushBlocks = pushBlocks;
        }
        
        if (pushBlockHomes.length > 0) {
            level.interactables.pushBlockHomes = pushBlockHomes;
        }

        if (laserEmitters.length > 0) {
            level.interactables.laserEmitters = laserEmitters;
        }

        return level;
    }

    getEntitiesAtTile(level, row, cell) {
        var entities = [];

        if (
            level.player.position.row === row 
            && level.player.position.cell === cell
        ) {
            entities.push('p');
        }

        if (
            level.interactables.exits[0].position.row === row 
            && level.interactables.exits[0].position.cell === cell
        ) {
            entities.push('e');
        }

        if (level.interactables.pushBlockHomes) {
            for (let pushBlockHome of level.interactables.pushBlockHomes) {
                if (
                    pushBlockHome.position.cell === cell
                    && pushBlockHome.position.row === row
                ) {
                    entities.push('h');
                }
            }
        }

        if (level.interactables.laserEmitters) {
            for (let laserEmitter of level.interactables.laserEmitters) {
                if (
                    laserEmitter.position.cell === cell
                    && laserEmitter.position.row === row
                ) {
                    switch (laserEmitter.direction) {
                        case 'down':
                            entities.push('l');
                            break;
                        case 'up':
                            entities.push('lu');
                            break;
                        case 'left':
                            entities.push('ll');
                            break;
                        case 'right':
                            entities.push('lr');
                            break;
                    }
                }
            }
        }

        if (level.interactables.pushBlocks) {
            for (let pushBlock of level.interactables.pushBlocks) {
                if (
                    pushBlock.position.cell === cell
                    && pushBlock.position.row === row
                ) {
                    switch (pushBlock.type) {
                        case 'default':
                            entities.push('b');
                            break;
                        case 'laser':
                            switch (pushBlock.orientation) {
                                case 0:
                                    entities.push('bl');
                                    break;
                                case 90:
                                    entities.push('bll');
                                    break;
                                case 180:
                                    entities.push('blu');
                                    break;
                                case 270:
                                    entities.push('blr');
                                    break;
                            }
                            break;
                        case 'mirror':
                            switch (pushBlock.orientation) {
                                case 0:
                                    entities.push('bm');
                                    break;
                                case 90:
                                    entities.push('bml');
                                    break;
                                case 180:
                                    entities.push('bmu');
                                    break;
                                case 270:
                                    entities.push('bmr');
                                    break;
                            }
                            break;
                        case 'laserCapture':
                            entities.push('bc');
                            break;
                    }
                }
            }
        }

        return entities;
    }
}