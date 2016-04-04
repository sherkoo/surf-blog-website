/**
 * Node Modules
 */

var gulp = require('gulp'),
    gulpUtil = require('gulp-util'),
    concat = require('gulp-concat'),
    minify = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch');
    connect = require('gulp-connect');

/**
 * Tasks
 */

// task: scripts
gulp.task('scripts', function(){
  return gulp.src('./public/js/**/*.js')
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/js/min'))
});

// task: sass
gulp.task('sass', function () {
  gulp.src('./public/scss/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.min.css'))
    .pipe(minify())
    .pipe(gulp.dest('./public/css'));
});


// task: Connect to livereload
gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});

/**
 * Watch
 */

// task: default
gulp.task('default', ['connect', 'watch']);

// watch over changes of source files
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('.index.html').on('change', livereload.changed);
  gulp.watch('./public/js/**', ['scripts']);
  gulp.watch('./public/scss/**', ['sass']);
  gulp.watch('./public/css/main.min.css').on('change', livereload.changed);
});
