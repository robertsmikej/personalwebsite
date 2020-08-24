var gulp = require('gulp');
// Requires gulp plugins
//var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
//var minify = require('gulp-minify');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');

//DEVELOPMENT PROCESS
// Initializes LESS PlugIn
//gulp.task('less', function () {
//    return gulp.src('app/css/**/*.less')
//        .pipe(less())
//        .pipe(gulp.dest('dist/css'))
//        .pipe(browserSync.reload({
//            stream: true
//        }));
//});
// Initializes Watch - Watches for changes with project
gulp.task('watch', ['browserSync'], function () {
    //Anytime LESS/CSS changes/saves, the plugin runs 
//    gulp.watch('app/css/**/*.less', ['less']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('app/css/**/*.css', browserSync.reload);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});
// Initializes Browser Sync
gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    });
});

//OPTIMIZING FOR PRODUCTION
gulp.task('images', function () {
    return gulp.src('app/imgs/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest('dist/imgs'));
});
gulp.task('fonts', function () {
    return gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));
});
gulp.task('clean:dist', function () {
    return del.sync('dist');
});
gulp.task('autoprefix', function () {
    return gulp.src('dist/css/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'));
});
gulp.task('useref', function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist/'));
});
//GROUPS TESKS TOGETHER - JUST HAVE TO RUN - GULP INITIAL
gulp.task('initial', function (callback) {
    runSequence(['browserSync', 'watch'],
        callback
        );
});
//GROUPS TESKS TOGETHER - JUST HAVE TO RUN - GULP BUILD
gulp.task('build', function (callback) {
    runSequence('clean:dist', 'autoprefix', 'useref',
        ['images', 'fonts'],
        callback
        );
});