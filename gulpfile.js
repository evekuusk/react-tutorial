'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    del = require('del');

gulp.task("concatScripts", function() {
  return gulp.src([
    // scripts
    'js/components/**.js',
    'js/main.js'
  ])
  .pipe(concat('app.js'))
  .pipe(gulp.dest('public/js'));
})

gulp.task("default", ["concatScripts"], function() {
})
