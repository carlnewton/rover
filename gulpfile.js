const gulp = require('gulp');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
 
gulp.task('build', function() {
    return gulp.src(
        [
            './src/Maps.js',
            './src/Tiles.js',
            './src/PushBlockTypes.js',
            './src/Move.js',
            './src/Level.js',
            './src/Player.js',
            './src/PushBlock.js',
            './src/PushBlocks.js',
            './src/Exit.js',
            './src/Laser.js',
            './src/Controls.js',
            './src/Canvas.js',
            './src/Game.js',
            './src/index.js' 
        ]
    )
        .pipe(concat('script.js'))
        .pipe(terser())
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('default', gulp.series('build'));

gulp.task('watch', function() {
    gulp.watch('./src/*.js', gulp.series('build'));
});