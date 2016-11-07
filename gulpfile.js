var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var sass        = require('gulp-sass');
var cssnano     = require('gulp-cssnano');
var jshint      = require( 'gulp-jshint' );
var stylish     = require( 'jshint-stylish' );
var autoprefixer = require('gulp-autoprefixer');
var del          = require('del');
var zip          = require('gulp-zip');
var runSequence  = require('run-sequence');

//Files to src and ingnore for gulp build
var build_files = [
  '**',
  '!node_modules',
  '!node_modules/**',
  '!bower_components',
  '!bower_components/**',
  '!dist',
  '!dist/**',
  '!sass',
  '!sass/**',
  '!.git',
  '!.git/**',
  '!package.json',
  '!.gitignore',
  '!gulpfile.js',
  '!.editorconfig',
  '!.jshintrc'
];

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
        .pipe(sass({
             outputStyle: 'expanded'
         }))
        .pipe(autoprefixer(['> 1%', 'last 2 versions', 'Firefox ESR']))
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

gulp.task('build-clean', function() {
  del(['dist/**/*']);
});

gulp.task('build-copy', function() {
  return gulp.src(build_files)
    .pipe(gulp.dest('dist/chocolita'));
});

gulp.task('build-zip', function() {
  return gulp.src('dist/**/*')
    .pipe(zip('chocolita.zip'))
    .pipe(gulp.dest('dist'));
});

gulp.task('build-delete', function() {
  del(['dist/**/*', '!dist/chocolita.zip']);
});

//Sequence to build .zip file theme ready for production
gulp.task('build', function(callback) {
  runSequence('build-clean', 'build-copy', 'build-zip', 'build-delete');
});

// The default task. When developting just run 'gulp' and this is what will be ran.
// Note the second parameter, those are dependency tasks which need to be done
// before the main function (third parameter) is called.
gulp.task( 'default', [ 'sass', 'browser-sync' ], function() {
  gulp.watch("sass/**/*.scss", ['sass']);
  console.log('done');
} );
