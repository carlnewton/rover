class Maps{constructor(){this.list=[{levelID:1,map:[[1,0,0,0,1,1,1,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,1,1,1,0,0,0,1]],player:{position:{row:2,cell:2}},interactables:{exits:[{position:{row:2,cell:8}}]}},{levelID:2,map:[[1,0,0,0,1,1,1,0,0,0,1],[0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,1]],player:{position:{row:2,cell:2}},interactables:{exits:[{position:{row:2,cell:8}}]}},{levelID:3,map:[[1,0,0,0,1,1,1,0,0,0,1],[0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0],[1,0,0,0,1,1,1,0,0,0,1]],player:{position:{row:4,cell:2}},interactables:{pushBlocks:[{type:"default",position:{row:2,cell:5}}],exits:[{position:{row:4,cell:8}}]}},{levelID:4,map:[[1,2,2,2,1,1,1,2,2,2,1],[2,2,2,2,2,1,2,2,2,2,2],[2,2,2,0,0,1,0,0,2,2,2],[2,2,2,0,0,0,0,0,2,2,2],[2,2,2,0,0,1,0,0,2,2,2],[2,2,2,2,2,1,2,2,2,2,2],[1,2,2,2,1,1,1,2,2,2,1]],player:{position:{row:3,cell:1}},interactables:{pushBlocks:[{type:"default",position:{row:3,cell:5}}],pushBlockHomes:[{position:{row:3,cell:5}}],exits:[{position:{row:3,cell:9}}]}},{levelID:5,map:[[1,0,0,1,1,1,1],[1,0,0,0,0,0,0],[0,0,2,0,2,0,0],[0,0,0,0,0,0,1],[1,0,2,0,2,0,1],[1,0,0,0,0,0,1],[1,1,1,1,0,0,1]],player:{position:{row:3,cell:3}},interactables:{pushBlocks:[{type:"default",position:{row:5,cell:3}}],pushBlockHomes:[{position:{row:3,cell:3}}],exits:[{position:{row:5,cell:3}}]}},{levelID:6,map:[[0,0,0,0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,0,1,1,0],[0,1,0,0,0,0,0,0,0,1,0],[0,1,0,0,0,0,0,0,0,1,0],[0,1,1,0,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,1],[1,1,1,0,0,0,0,0,1,1,1]],player:{position:{row:6,cell:5}},interactables:{pushBlocks:[{type:"default",position:{row:4,cell:3}},{type:"default",position:{row:1,cell:7}}],pushBlockHomes:[{position:{row:4,cell:3}},{position:{row:1,cell:7}}],exits:[{position:{row:3,cell:5}}]}},{levelID:7,map:[[0,0,0,1,0,2,0,0],[2,0,0,0,0,1,0,0],[1,2,0,0,2,1,1,0],[1,1,1,0,0,1,1,0],[1,1,1,0,0,1,1,0],[1,1,1,1,0,0,0,0],[1,1,1,1,1,0,0,0]],player:{position:{row:6,cell:7}},interactables:{pushBlocks:[{type:"default",position:{row:2,cell:2}},{type:"default",position:{row:3,cell:3}},{type:"default",position:{row:4,cell:4}},{type:"default",position:{row:0,cell:6}}],pushBlockHomes:[{position:{row:2,cell:2}},{position:{row:3,cell:3}},{position:{row:4,cell:4}},{position:{row:0,cell:7}}],exits:[{position:{row:6,cell:7}}]}},{levelID:8,map:[[1,0,0,0,1,0,1,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,1,1,1,0,0,0,1]],player:{position:{row:2,cell:2}},interactables:{pushBlocks:[{type:"default",position:{row:4,cell:2}}],exits:[{position:{row:3,cell:8}}],laserEmitters:[{position:{row:0,cell:5},direction:"down"}]}},{levelID:9,map:[[1,1,1,1,0,0,0,1,1,1,1],[1,1,1,1,2,2,0,1,0,0,0],[0,0,0,1,2,0,0,0,0,0,0],[0,0,0,1,0,0,0,1,0,0,0],[0,0,0,1,0,0,0,1,1,1,1],[0,0,0,0,0,0,0,1,1,1,1],[0,0,0,0,0,0,0,1,1,1,1],[0,0,0,1,1,1,1,1,1,1,1]],player:{position:{row:6,cell:1}},interactables:{pushBlocks:[{type:"default",position:{row:3,cell:1}},{type:"default",position:{row:4,cell:1}},{type:"default",position:{row:5,cell:3}}],exits:[{position:{row:2,cell:9}}],laserEmitters:[{position:{row:0,cell:4},direction:"down"},{position:{row:0,cell:5},direction:"down"},{position:{row:0,cell:6},direction:"down"}]}},{levelID:10,map:[[1,0,0,0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,2,0,0,0],[0,0,0,0,0,2,0,0,0,0,0],[1,0,1,0,2,0,2,1,0,1,1],[0,0,1,2,1,1,0,0,2,1,1],[0,0,0,0,0,0,0,0,0,0,0],[0,0,1,1,1,1,1,1,1,1,1]],player:{position:{row:1,cell:6}},interactables:{pushBlocks:[{type:"default",position:{row:5,cell:6}},{type:"default",position:{row:1,cell:9}}],pushBlockHomes:[{position:{row:5,cell:10}},{position:{row:1,cell:8}}],exits:[{position:{row:1,cell:10}}],laserEmitters:[{position:{row:0,cell:8},direction:"down"}]}},{levelID:11,map:[[1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,1],[0,0,1,0,0,0,0,0,1,0,0],[1,1,1,1,1,1,1,1,1,1,1]],player:{position:{row:5,cell:0}},interactables:{pushBlocks:[{type:"default",position:{row:2,cell:1}},{type:"default",position:{row:2,cell:4}},{type:"laser",position:{row:1,cell:8},orientation:0}],exits:[{position:{row:5,cell:10}}],laserEmitters:[{position:{row:5,cell:5},direction:"up"},{position:{row:1,cell:2},direction:"down"}]}},{levelID:12,map:[[0,0,0,0,0,0,0,0,0,0,1],[0,1,1,1,1,1,1,1,1,0,1],[2,0,0,0,0,0,0,0,0,2,0],[1,2,2,2,2,2,2,2,0,0,0],[0,0,0,0,0,0,0,0,0,0,0],[0,1,0,1,1,1,0,1,0,1,0],[0,0,0,0,0,0,2,1,0,0,0]],player:{position:{row:6,cell:10}},interactables:{pushBlocks:[{type:"laser",position:{row:2,cell:8},orientation:0},{type:"default",position:{row:4,cell:4}},{type:"default",position:{row:5,cell:6}}],pushBlockHomes:[{position:{row:6,cell:10}}],laserEmitters:[{position:{row:3,cell:9},direction:"left"}],exits:[{position:{row:6,cell:0}}]}},{levelID:13,map:[[1,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,1]],player:{position:{row:4,cell:3}},interactables:{pushBlocks:[{type:"default",position:{row:3,cell:3}},{type:"laser",position:{row:1,cell:5},orientation:0},{type:"laser",position:{row:5,cell:5},orientation:90},{type:"laser",position:{row:1,cell:1},orientation:270},{type:"laser",position:{row:5,cell:1},orientation:180}],pushBlockHomes:[{position:{row:2,cell:2}},{position:{row:4,cell:4}},{position:{row:4,cell:2}},{position:{row:2,cell:4}},{position:{row:3,cell:3}}],exits:[{position:{row:3,cell:7}}]}},{levelID:14,map:[[1,1,1,1,0,1,1,1,1],[1,1,1,0,0,0,1,1,1],[1,1,0,0,0,0,0,1,1],[1,0,0,1,0,1,0,0,1],[0,0,1,0,0,0,0,0,0],[1,0,0,1,0,1,0,0,1],[1,1,0,0,0,0,0,1,1],[1,1,1,0,0,0,1,1,1],[1,1,1,1,0,1,1,1,1]],player:{position:{row:6,cell:4}},interactables:{pushBlocks:[{type:"laserCapture",position:{row:2,cell:4}}],exits:[{position:{row:6,cell:4}}],laserEmitters:[{position:{row:4,cell:6},direction:"left"}]}},{levelID:15,map:[[1,1,0,0,0,0,2,0],[2,0,0,0,0,2,0,0],[0,0,2,0,0,0,0,1],[0,1,0,0,1,0,0,0],[0,0,0,0,1,0,0,0],[0,0,0,0,1,0,0,0]],player:{position:{row:4,cell:6}},interactables:{pushBlocks:[{type:"laserCapture",position:{row:1,cell:1}},{type:"laserCapture",position:{row:2,cell:1}},{type:"laser",position:{row:2,cell:6},orientation:90}],laserEmitters:[{position:{row:5,cell:0},direction:"right"}],exits:[{position:{row:4,cell:1}}]}}]}getByLevelID(e){for(let t of this.list)if(t.levelID===e)return t}}class Tiles{constructor(){this.mapTiles=[{id:0,name:"floor",colour:"#e5ddcb",obstructsPlayer:!1,obstructsPushBlock:!1,obstructsLaser:!1},{id:1,name:"wall",colour:"#bc6247",obstructsPlayer:!0,obstructsPushBlock:!0,obstructsLaser:!0},{id:2,name:"noBlockFloor",colour:"#d9d2c1",obstructsPlayer:!1,obstructsPushBlock:!0,obstructsLaser:!1}],this.playerTiles=[{id:0,name:"rover",colour:"#685e6c",obstructsPlayer:!0,obstructsPushBlock:!0,obstructsLaser:!0}],this.pushBlockTiles=[{id:0,name:"block",colour:"#eb7b59",obstructsPlayer:!0,obstructsPushBlock:!0,obstructsLaser:!0},{id:1,name:"laser",colour:"#eb7b59",detailColour:"#99503a",obstructsPlayer:!0,obstructsPushBlock:!0,obstructsLaser:!0},{id:2,name:"laserCapture",colour:"#eb7b59",detailColour:"#c00",obstructsPlayer:!0,obstructsPushBlock:!0,obstructsLaser:!0}],this.pushBlockHomeTiles=[{id:0,name:"pushBlockHome",colour:"#eb7b59",obstructsPlayer:!1,obstructsPushBlock:!1,obstructsLaser:!1}],this.exitTiles=[{id:0,name:"enabled",colour:"#685e6c",obstructsPlayer:!1,obstructsPushBlock:!1,obstructsLaser:!1},{id:1,name:"disabled",colour:"#c7c0b1",obstructsPlayer:!1,obstructsPushBlock:!1,obstructsLaser:!1}],this.laserTiles=[{id:0,name:"laserEmitter",colour:"#bc6247",detailColour:"#663627",obstructsPlayer:!0,obstructsPushBlock:!0}]}getByID(e,t){switch(e){case"map":return this.getMapTileByID(t);case"pushBlock":return this.getPushBlockTileByID(t)}}getMapTileByID(e){for(let t of this.mapTiles)if(t.id===e)return t}getPushBlockTileByID(e){for(let t of this.pushBlockTiles)if(t.id===e)return t}getPlayerTile(e=0){for(let t of this.playerTiles)if(t.id===e)return t}}class PushBlockTypes{constructor(){this.list=[{id:0,name:"default",tileID:0},{id:1,name:"laser",tileID:1},{id:2,name:"laserCapture",tileID:2}]}getByName(e){for(let t of this.list)if(t.name===e)return t}}class Timer{constructor(){this.list=[]}count(e,t=0,i=!1){var s=this.get(e);return void 0===s?(s={reference:e,length:t,start:Date.now(),elapsed:0,elapsedPercent:0,remaining:t,remainingPercent:100,completed:!1,backwards:!1},this.list.push(s),s):(s.elapsed=Date.now()-s.start,s.elapsedPercent=Math.round(s.elapsed/s.length*100),s.remaining=s.length-s.elapsed,s.remainingPercent=Math.round(s.remaining/s.length*100),s.elapsed>=s.length&&(!1===i?(s.elapsed=s.length,s.elapsedPercent=100,s.remaining=0,s.remainingPercent=0,s.completed=!0,this.remove(s.reference)):(s.start=Date.now(),s.elapsed=0,s.elapsedPercent=0,s.remaining=t,s.remainingPercent=100,s.completed=!1,!0===s.backwards?s.backwards=!1:s.backwards=!0)),!0===s.backwards?{reference:s.reference,length:s.length,start:s.start,elapsed:s.remaining,elapsedPercent:s.remainingPercent,remaining:s.elapsed,remainingPercent:s.elapsedPercent,completed:!1,backwards:!0}:s)}get(e){for(let t of this.list)if(t.reference===e)return t}remove(e){var t=0;for(let i of this.list){if(i.reference===e)return this.list.splice(t,1),!0;t++}}}class Move{constructor(e){this.game=e,this.list=[]}add(e,t,i){var s={id:this.getNewID(),entityType:e,entityID:t,direction:i};this.list.push(s)}getNewID(){var e=0;for(let t of this.list)t.id>e&&(e=t.id);return e+1}move(){this.movePlayer(),this.movePushBlocks()}movePlayer(){var e=this.getEarliestMovement("player",0);if(void 0===e)return!1;var t=this.game.player.move(e.direction);!0!==t&&!1!==t||this.removeEntry(e.id)}movePushBlocks(){for(let t of this.getEarliestPushBlockMovements()){var e=this.game.pushBlocks.moveBlock(t.direction,t.entityID);!0!==e&&!1!==e||this.removeEntry(t.id)}}getEarliestMovement(e,t){for(let i of this.list)if(i.entityType===e&&i.entityID===t)return i}getEarliestPushBlockMovements(){var e=[],t=[];for(let i of this.list)"pushBlock"!==i.entityType||e.includes(i.entityID)||(e.push(i.entityID),t.push(i));return t}removeEntry(e){var t=0;for(let i of this.list){if(i.id===e)return this.list.splice(t,1),!0;t++}}clear(){this.list=[]}}class Level{constructor(e,t=1){this.game=e,this.map=this.game.maps.getByLevelID(t),this.begin=!0}locationAvailable(e,t,i){if(!this.locationExists(e,t))return!1;var s=this.getMapTile(e,t);if("player"===i&&s.obstructsPlayer||"pushBlock"===i&&s.obstructsPushBlock||"laser"===i&&s.obstructsLaser)return!1;if("laser"===i||"pushBlock"===i){if(this.game.pushBlocks.getBlockByLocation(e,t))return!1;if(this.game.pushBlocks.getBlocksMovingToLocation(e,t).length>0)return!1}if(void 0!==this.map.interactables&&void 0!==this.map.interactables.laserEmitters)for(let i of this.map.interactables.laserEmitters)if(i.position.row===e&&i.position.cell===t)return!1;return!0}locationExists(e,t){return void 0!==this.map.map[e]&&void 0!==this.map.map[e][t]}getMapTile(e,t){if(!this.locationExists(e,t))return!1;var i=this.map.map[e][t];return this.game.tiles.getByID("map",i)}getNextAvailablePositionForDirection(e,t,i,s){var l=t,o=i;switch(e){case"up":t-=1;break;case"down":t+=1;break;case"left":i-=1;break;case"right":i+=1}return this.locationAvailable(t,i,s)?{row:t,cell:i}:{row:l,cell:o}}complete(){this.game.queueNextLevel()}initialise(){this.game.pushBlocks.checkStatus()}}class Player{constructor(e){this.game=e,this.position={row:e.level.map.player.position.row,cell:e.level.map.player.position.cell},this.nextPosition={row:null,cell:null},this.speed=8,this.moving=!1}move(e){var t=Math.floor(this.position.row),i=Math.floor(this.position.cell),s=this.game.level.getNextAvailablePositionForDirection(e,t,i,"player"),l=this.speed*this.game.delta/1e3;if(null===this.nextPosition.row&&null===this.nextPosition.cell){var o=this.game.pushBlocks.getBlockByLocation(s.row,s.cell);if(void 0!==o){if(!this.game.pushBlocks.blockCanMove(e,o.id))return!1;this.game.move.add("pushBlock",o.id,e),this.moving=!0}if(this.game.pushBlocks.getBlocksMovingToLocation(s.row,s.cell).length>0)return!1;this.nextPosition.row=s.row,this.nextPosition.cell=s.cell}switch(e){case"up":if(Math.floor(this.position.row-l)<this.nextPosition.row)return this.position.row=this.nextPosition.row,this.nextPosition.row=null,this.nextPosition.cell=null,this.moving=!1,this.checkStatus(),!0;this.position.row-=l;break;case"down":if(Math.ceil(this.position.row+l)>this.nextPosition.row)return this.position.row=this.nextPosition.row,this.nextPosition.row=null,this.nextPosition.cell=null,this.moving=!1,this.checkStatus(),!0;this.position.row+=l;break;case"left":if(Math.floor(this.position.cell-l)<this.nextPosition.cell)return this.position.cell=this.nextPosition.cell,this.nextPosition.row=null,this.nextPosition.cell=null,this.moving=!1,this.checkStatus(),!0;this.position.cell-=l;break;case"right":if(Math.ceil(this.position.cell+l)>this.nextPosition.cell)return this.position.cell=this.nextPosition.cell,this.nextPosition.row=null,this.nextPosition.cell=null,this.moving=!1,this.checkStatus(),!0;this.position.cell+=l}return this.position}checkStatus(){this.checkAlive(),this.game.exit.found()&&this.game.level.complete()}checkAlive(){this.game.laser.laserExists(this.position.row,this.position.cell)&&(this.game.move.clear(),this.game.restartLevel())}}class PushBlock{constructor(e,t,i,s,l=0){this.id=e,this.row=t,this.cell=i,this.nextRow=null,this.nextCell=null,this.tile=s,this.orientation=l,this.active=!1}}class PushBlocks{constructor(e){if(this.game=e,this.list=[],this.allPushBlocksHome=!1,void 0!==this.game.level.map.interactables&&void 0!==this.game.level.map.interactables.pushBlocks)for(let e of this.game.level.map.interactables.pushBlocks){var t=0;void 0!==e.orientation&&(t=e.orientation),this.add(e.type,e.position.row,e.position.cell,t)}else this.allPushBlocksHome=!0}add(e,t,i,s){var l=this.list.length,o=this.game.pushBlockTypes.getByName(e),r=this.game.tiles.getByID("pushBlock",o.tileID),a=new PushBlock(l,t,i,r,s);this.list.push(a)}getBlockByLocation(e,t){for(let i of this.list)if(i.row===e&&i.cell===t)return i}getBlocksMovingToLocation(e,t){var i=[];for(let s of this.list)s.nextRow===e&&s.nextCell===t&&i.push(s);return i}moveBlock(e,t){var i=this.getBlockByID(t),s=this.game.player.speed*this.game.delta/1e3;if(!i)return!1;var l=this.game.level.getNextAvailablePositionForDirection(e,Math.floor(i.row),Math.floor(i.cell),"pushBlock");if(null===i.nextRow&&null===i.nextCell){if(!this.blockCanMove(e,t))return!1;i.nextRow=l.row,i.nextCell=l.cell}switch(e){case"up":if(Math.floor(i.row-s)<i.nextRow)return i.row=i.nextRow,i.nextRow=null,i.nextCell=null,this.checkStatus(),!0;i.row-=s;break;case"down":if(Math.ceil(i.row+s)>i.nextRow)return i.row=i.nextRow,i.nextRow=null,i.nextCell=null,this.checkStatus(),!0;i.row+=s;break;case"left":if(Math.floor(i.cell-s)<i.nextCell)return i.cell=i.nextCell,i.nextRow=null,i.nextCell=null,this.checkStatus(),!0;i.cell-=s;break;case"right":if(Math.ceil(i.cell+s)>i.nextCell)return i.cell=i.nextCell,i.nextRow=null,i.nextCell=null,this.checkStatus(),!0;i.cell+=s}}checkStatus(){this.game.laser.updateEmitterPushBlocks(),this.game.laser.emitLasers(),this.checkAllPushBlocksHome()&&this.checkAllLaserCapturesActive()?this.game.exit.enable():this.game.exit.disable()}checkAllLaserCapturesActive(){for(let e of this.list)if("laserCapture"===e.tile.name&&!1===e.active)return!1;return!0}getBlockByID(e){for(let t of this.list)if(t.id===e)return t}deactivateAll(){for(let e of this.list)e.active=!1}blockCanMove(e,t){var i=this.getBlockByID(t);if(!i)return!1;var s=this.game.level.getNextAvailablePositionForDirection(e,i.row,i.cell,"pushBlock");return(s.row!==i.row||s.cell!==i.cell)&&(!this.getBlockByLocation(s.row,s.cell)&&!(this.getBlocksMovingToLocation(s.row,s.cell).length>0))}checkAllPushBlocksHome(){if(void 0===this.game.level.map.interactables.pushBlockHomes)return this.allPushBlocksHome=!0,!0;for(let t of this.game.level.map.interactables.pushBlockHomes){var e=!1;for(let i of this.list)i.row===t.position.row&&i.cell===t.position.cell&&(e=!0);if(!1===e)return this.allPushBlocksHome=!1,!1}return this.allPushBlocksHome=!0,!0}}class Exit{constructor(e){this.game=e,this.game.pushBlocks.allPushBlocksHome?this.enable():this.disable()}found(){var e=this.game.player.position;if(!1===this.enabled)return!1;for(let t of this.game.level.map.interactables.exits)if(t.position.row===e.row&&t.position.cell===e.cell)return!0}enable(){this.enabled=!0,this.tile=this.game.tiles.exitTiles[0]}disable(){this.enabled=!1,this.tile=this.game.tiles.exitTiles[1]}}class Laser{constructor(e){this.game=e,this.emitters=[],this.lasers=[],this.addEmitters(),this.updateEmitterPushBlocks(),this.emitLasers()}addEmitters(){if(void 0===this.game.level.map.interactables||void 0===this.game.level.map.interactables.laserEmitters)return!1;for(let e of this.game.level.map.interactables.laserEmitters)e.id=this.getNewEmitterID(),e.type="static",this.emitters.push(e)}removeEmittersByType(e){for(var t=this.emitters.length;t--;)"pushBlock"===this.emitters[t].type&&this.emitters.splice(t,1)}getNewEmitterID(){var e=0;for(let t of this.emitters)t.id>e&&(e=t.id);return e+1}updateEmitterPushBlocks(){this.removeEmittersByType("pushBlock");for(let t of this.game.pushBlocks.list)if("laser"===t.tile.name){var e="down";switch(t.orientation){case 0:e="down";break;case 90:e="left";break;case 180:e="up";break;case 270:e="right"}this.emitters.push({id:this.getNewEmitterID(),type:"pushBlock",position:{row:t.row,cell:t.cell},direction:e})}}emitLasers(){this.game.pushBlocks.deactivateAll(),this.lasers=[];for(let e of this.emitters)this.emitLaserFromEmitter(e.id)}laserExists(e,t){this.updateEmitterPushBlocks(),this.emitLasers();for(let i of this.lasers)if(i.row===e&&i.cell===t)return!0}emitLaserFromEmitter(e){var t=this.getEmitterByID(e);this.emitLaserFrom(t.position.row,t.position.cell,t.direction)}emitLaserFrom(e,t,i){switch(i){case"down":e+=1;break;case"up":e-=1;break;case"left":t-=1;break;case"right":t+=1}if(!this.game.level.locationAvailable(e,t,"laser")){var s=this.game.pushBlocks.getBlockByLocation(e,t);return void 0!==s&&"laserCapture"===s.tile.name&&(s.active=!0),!1}this.lasers.push({row:e,cell:t,direction:i}),this.emitLaserFrom(e,t,i)}getEmitterByID(e){for(let t of this.emitters)if(t.id===e)return t}}class Controls{constructor(e){this.game=e,this.listen(),this.locked=!1}listen(){var e=this;window.addEventListener("keydown",function(t){e.keyDown(t)})}keyDown(e){if(!0!==this.locked)switch(e.keyCode){case 87:case 38:this.game.move.add("player",0,"up");break;case 83:case 40:this.game.move.add("player",0,"down");break;case 65:case 37:this.game.move.add("player",0,"left");break;case 68:case 39:this.game.move.add("player",0,"right");break;case 32:this.game.restartLevel();break;case 221:this.game.queueNextLevel()}}}class Canvas{constructor(e){this.game=e,this.tileSize=64,this.c=document.getElementById("canvas"),this.ctx=this.c.getContext("2d"),this.setDimensions()}getPlayableAreaDimensions(){var e=this.game.level.map.map,t=e.length*this.tileSize;return{width:e[0].length*this.tileSize,height:t}}getLeftPadding(){return this.c.width/2-this.getPlayableAreaDimensions().width/2}getTopPadding(){return this.c.height/2-this.getPlayableAreaDimensions().height/2}setDimensions(){if(this.c.height=this.c.clientHeight,this.c.width=this.c.clientWidth,this.tileSize=64,this.getPlayableAreaDimensions().width>this.c.width||this.getPlayableAreaDimensions().height>this.c.height){var e=this.game.level.map.map,t=e.length,i=e[0].length,s=this.c.width/i,l=this.c.height/t;l<s&&l<this.tileSize?this.tileSize=Math.floor(l):s<this.tileSize&&(this.tileSize=Math.floor(s))}}drawFrame(){this.drawLevel(),this.drawPlayer()}drawLevel(){this.drawBackground(),this.drawMap(),this.drawExits(),this.drawPushBlockHomes(),this.drawLasers(),this.drawPushBlocks()}drawBackground(){this.ctx.fillStyle=this.game.tiles.getByID("map",1).colour,this.ctx.fillRect(0,0,this.c.clientWidth,this.c.clientHeight)}drawPlayer(){var e=this.game.tiles.getPlayerTile(),t=this.game.player.position.row*this.tileSize,i=this.game.player.position.cell*this.tileSize;this.drawTile(e.colour,t,i)}drawMap(){for(var e=this.game.level.map,t=0;t<e.map.length;t++)for(var i=e.map[t],s=0;s<i.length;s++){var l=i[s];this.drawMapTile(l,t,s)}}drawLevelComplete(){var e=this.game.timer.count("levelComplete",1e3);if(!0===e.completed)return!0;this.ctx.fillStyle="rgba(255, 255, 255, "+e.elapsedPercent/100+")",this.ctx.fillRect(0,0,this.c.clientWidth,this.c.clientHeight)}drawLevelBegin(){var e=this.game.timer.count("levelBegin",1e3);if(!0===e.completed)return!0;this.ctx.fillStyle="rgba(255, 255, 255, "+e.remainingPercent/100+")",this.ctx.fillRect(0,0,this.c.clientWidth,this.c.clientHeight)}drawPushBlocks(){for(let s of this.game.pushBlocks.list){var e=s.row*this.tileSize,t=s.cell*this.tileSize;switch(s.tile.name){case"laser":var i="down";switch(s.orientation){case 0:i="down";break;case 90:i="left";break;case 180:i="up";break;case 270:i="right"}this.drawLaserEmitter(s.tile.colour,e,t,i);break;case"laserCapture":this.drawLaserCapture(s.tile.colour,e,t,s.active);break;default:this.drawTile(s.tile.colour,e,t)}}}drawPushBlockHomes(){if(void 0===this.game.level.map.interactables||void 0===this.game.level.map.interactables.pushBlockHomes)return!1;for(let s of this.game.level.map.interactables.pushBlockHomes){var e=s.position.row*this.tileSize,t=s.position.cell*this.tileSize,i=this.game.tiles.pushBlockHomeTiles[0].colour;this.drawTileOutline(i,e,t)}}drawExits(){for(let s of this.game.level.map.interactables.exits){var e=s.position.row*this.tileSize,t=s.position.cell*this.tileSize,i=this.game.exit.tile.colour;this.drawTileOutline(i,e,t)}}drawLasers(){this.drawLaserEmitters(),this.drawLaserLines()}drawLaserLines(){for(let e of this.game.laser.lasers)this.drawTileLine(e.direction,this.tileSize/11,this.getLaserColour(),e.row*this.tileSize,e.cell*this.tileSize)}drawLaserEmitters(){if(void 0===this.game.level.map.interactables||void 0===this.game.level.map.interactables.laserEmitters)return!1;for(let s of this.game.level.map.interactables.laserEmitters){var e=s.position.row*this.tileSize,t=s.position.cell*this.tileSize,i=this.game.tiles.laserTiles[0];this.drawLaserEmitter(i.colour,e,t,s.direction)}}tileSizePercent(e){return e/100*this.tileSize}drawLaserCapture(e,t,i,s){t+=this.getTopPadding(),i+=this.getLeftPadding(),this.ctx.fillStyle=this.getLaserColour(),!0===s&&(this.ctx.beginPath(),this.ctx.moveTo(i+this.tileSizePercent(50),t+this.tileSizePercent(35)),this.ctx.lineTo(i+this.tileSizePercent(65),t+this.tileSizePercent(50)),this.ctx.lineTo(i+this.tileSizePercent(50),t+this.tileSizePercent(65)),this.ctx.lineTo(i+this.tileSizePercent(35),t+this.tileSizePercent(50)),this.ctx.fill()),this.ctx.fillStyle=e,this.ctx.beginPath(),this.ctx.moveTo(i,t),this.ctx.lineTo(i+this.tileSizePercent(80),t),this.ctx.lineTo(i,t+this.tileSizePercent(80)),this.ctx.fill(),this.ctx.beginPath(),this.ctx.moveTo(i+this.tileSize,t),this.ctx.lineTo(i+this.tileSizePercent(20),t),this.ctx.lineTo(i+this.tileSize,t+this.tileSizePercent(80)),this.ctx.fill(),this.ctx.beginPath(),this.ctx.moveTo(i,t+this.tileSize),this.ctx.lineTo(i+this.tileSizePercent(80),t+this.tileSize),this.ctx.lineTo(i,t+this.tileSizePercent(20)),this.ctx.fill(),this.ctx.beginPath(),this.ctx.moveTo(i+this.tileSize,t+this.tileSize),this.ctx.lineTo(i+this.tileSizePercent(20),t+this.tileSize),this.ctx.lineTo(i+this.tileSize,t+this.tileSizePercent(20)),this.ctx.fill()}getLaserColour(){var e=this.game.timer.count("laserColour",1e3,!0).elapsedPercent/100;return"rgba(204, 0, 0, "+(e=.5+e/6)+")"}drawLaserEmitter(e,t,i,s){switch(t+=this.getTopPadding(),i+=this.getLeftPadding(),s){case"up":this.ctx.fillStyle=this.getLaserColour(),this.ctx.beginPath(),this.ctx.moveTo(i+this.tileSizePercent(36),t),this.ctx.lineTo(i+this.tileSizePercent(50),t+this.tileSizePercent(16)),this.ctx.lineTo(i+this.tileSizePercent(63),t),this.ctx.fill(),this.ctx.fillStyle=e,this.ctx.beginPath(),this.ctx.moveTo(i,t),this.ctx.lineTo(i,t+this.tileSize),this.ctx.lineTo(i+this.tileSize,t+this.tileSize),this.ctx.lineTo(i+this.tileSize,t),this.ctx.lineTo(i+this.tileSizePercent(66),t),this.ctx.lineTo(i+this.tileSizePercent(50),t+this.tileSizePercent(20)),this.ctx.lineTo(i+this.tileSizePercent(33),t);break;case"down":this.ctx.fillStyle=this.getLaserColour(),this.ctx.beginPath(),this.ctx.moveTo(i+this.tileSizePercent(36),t+this.tileSize),this.ctx.lineTo(i+this.tileSizePercent(50),t+this.tileSizePercent(84)),this.ctx.lineTo(i+this.tileSizePercent(63),t+this.tileSize),this.ctx.fill(),this.ctx.fillStyle=e,this.ctx.beginPath(),this.ctx.moveTo(i,t),this.ctx.lineTo(i,t+this.tileSize),this.ctx.lineTo(i+this.tileSizePercent(33),t+this.tileSize),this.ctx.lineTo(i+this.tileSizePercent(50),t+this.tileSizePercent(80)),this.ctx.lineTo(i+this.tileSizePercent(66),t+this.tileSize),this.ctx.lineTo(i+this.tileSize,t+this.tileSize),this.ctx.lineTo(i+this.tileSize,t);break;case"left":this.ctx.fillStyle=this.getLaserColour(),this.ctx.beginPath(),this.ctx.moveTo(i,t+this.tileSizePercent(36)),this.ctx.lineTo(i+this.tileSizePercent(16),t+this.tileSizePercent(50)),this.ctx.lineTo(i,t+this.tileSizePercent(63)),this.ctx.fill(),this.ctx.fillStyle=e,this.ctx.beginPath(),this.ctx.moveTo(i,t),this.ctx.lineTo(i,t+this.tileSizePercent(33)),this.ctx.lineTo(i+this.tileSizePercent(20),t+this.tileSizePercent(50)),this.ctx.lineTo(i,t+this.tileSizePercent(66)),this.ctx.lineTo(i,t+this.tileSize),this.ctx.lineTo(i+this.tileSize,t+this.tileSize),this.ctx.lineTo(i+this.tileSize,t);break;case"right":this.ctx.fillStyle=this.getLaserColour(),this.ctx.beginPath(),this.ctx.moveTo(i+this.tileSize,t+this.tileSizePercent(36)),this.ctx.lineTo(i+this.tileSizePercent(84),t+this.tileSizePercent(50)),this.ctx.lineTo(i+this.tileSize,t+this.tileSizePercent(63)),this.ctx.fill(),this.ctx.fillStyle=e,this.ctx.beginPath(),this.ctx.moveTo(i,t),this.ctx.lineTo(i,t+this.tileSize),this.ctx.lineTo(i+this.tileSize,t+this.tileSize),this.ctx.lineTo(i+this.tileSize,t+this.tileSizePercent(66)),this.ctx.lineTo(i+this.tileSizePercent(80),t+this.tileSizePercent(50)),this.ctx.lineTo(i+this.tileSize,t+this.tileSizePercent(33)),this.ctx.lineTo(i+this.tileSize,t)}this.ctx.fill()}drawMapTile(e,t,i){if(void 0===e)return!1;var s=this.game.tiles.getByID("map",e),l=t*this.tileSize,o=i*this.tileSize;this.drawTile(s.colour,l,o)}drawTile(e,t,i){this.ctx.fillStyle=e,this.ctx.fillRect(i+this.getLeftPadding(),t+this.getTopPadding(),this.tileSize,this.tileSize)}drawTileLine(e,t,i,s,l){s+=this.getTopPadding(),l+=this.getLeftPadding(),this.ctx.strokeStyle=i,this.ctx.lineWidth=t,this.ctx.beginPath(),"up"===e||"down"===e?(this.ctx.moveTo(l+this.tileSize/2,s),this.ctx.lineTo(l+this.tileSize/2,s+this.tileSize)):(this.ctx.moveTo(l,s+this.tileSize/2),this.ctx.lineTo(l+this.tileSize,s+this.tileSize/2)),this.ctx.stroke()}drawTileOutline(e,t,i,s=this.tileSize/11){this.ctx.strokeStyle=e,this.ctx.lineWidth=s,this.ctx.strokeRect(this.getLeftPadding()+i+s,this.getTopPadding()+t+s,this.tileSize-2*s,this.tileSize-2*s)}}class Game{constructor(){this.maps=new Maps,this.tiles=new Tiles,this.pushBlockTypes=new PushBlockTypes,this.timer=new Timer,this.move=new Move(this),this.level=new Level(this),this.player=new Player(this),this.pushBlocks=new PushBlocks(this),this.exit=new Exit(this),this.laser=new Laser(this),this.controls=new Controls(this),this.canvas=new Canvas(this),this.tickFrame=0,this.lastTickUpdate=Date.now(),this.delta=0,this.nextLevelQueued=!1,this.level.initialise()}run(){var e=this;this.loop=setInterval(function(){e.tick()},0)}tick(){var e=Date.now();this.delta=e-this.lastTickUpdate,this.lastTickUpdate=e,this.tickFrame++,this.move.move(),this.canvas.drawFrame(),this.nextLevelQueued&&this.loadNextLevel(),!0===this.level.begin&&!0===this.canvas.drawLevelBegin()&&(this.level.begin=!1)}queueNextLevel(){this.controls.locked=!0,this.nextLevelQueued=!0}loadNextLevel(){if(!0===this.canvas.drawLevelComplete()){this.nextLevelQueued=!1;var e=this.level.map.levelID+1;this.maps.getByLevelID(e)||(e=1),this.loadLevel(e)}}restartLevel(){this.loadLevel(this.level.map.levelID)}loadLevel(e){this.move=new Move(this),this.level=new Level(this,e),this.player=new Player(this),this.pushBlocks=new PushBlocks(this),this.exit=new Exit(this),this.laser=new Laser(this),this.canvas=new Canvas(this),this.controls.locked=!1,this.level.initialise()}}var game=new Game;window.onresize=function(e){game.canvas.setDimensions()},game.run();