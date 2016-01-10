var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var sass        = require('gulp-sass');
var cssnano     = require('gulp-cssnano');
var jshint      = require( 'gulp-jshint' );
var stylish     = require( 'jshint-stylish' );

 
// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
    //watch files
    var files = [
    './style.css',
    './*.php'
    ];
 
    //initialize browsersync
    browserSync.init(files, {
    //browsersync with a php server
    // change 'playground' to whatever your local Nginx/Apache vhost is set
    // most commonly 'http://localhost/' or 'http://127.0.0.1/'
    // See http://www.browsersync.io/docs/options/ for more information    
    proxy: 'playground',
    notify: false
    });
});

 
// Sass task, will run when any SCSS files change & BrowserSync
// will auto-update browsers
gulp.task('sass', function () {
    return gulp.src('sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./'))
        .pipe(reload({stream:true}));
});


//Minify css with cssnano
gulp.task('cssnano', function() {
  return gulp.src('*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});


// Jshint outputs any kind of javascript problems you might have
// Only checks javascript files inside /js directory
gulp.task( 'jshint', function() {
  return gulp.src( './js/**/*.js' )
    .pipe( jshint( '.jshintrc' ) )
    .pipe( jshint.reporter( stylish ) )
    .pipe( jshint.reporter( 'fail' ) );
});


// The default task. When developting just run 'gulp' and this is what will be ran.
// Note the second parameter, those are dependency tasks which need to be done
// before the main function (third parameter) is called.
gulp.task( 'default', [ 'sass', 'browser-sync' ], function() {
  console.log('done');
} );
