var game = new Game();

window.onresize = function(event) {
    game.canvas.setDimensions();
}

game.run();