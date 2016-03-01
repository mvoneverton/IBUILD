'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var hbsfy = require('hbsfy');
var rimraf = require('rimraf');
var browserify = require('browserify');
 
gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

/****************************************
  JS
*****************************************/

var bundler = browserify({
  entries: ['./src/index.js'],
  debug: true
});

bundler.on('log', gutil.log); // output build logs to terminal
bundler.transform(hbsfy);

gulp.task('clean', function (cb) {
  rimraf('./public/scripts', cb);
});

gulp.task('build', ['clean'], function () {
  return bundler.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/scripts'));
});

 /****************************************
  watch
 *****************************************/

gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch(['!./scripts/bundle.js', './src/**/*'], ['build']);
});

/****************************************
  default
 *****************************************/

gulp.task('default', ['watch', 'build', 'sass'])