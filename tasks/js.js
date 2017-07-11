/**
 * JavaScript
 */
'use strict'
const gulp = require('gulp')
const standard = require('gulp-standard')

const named = require('vinyl-named')

const config = require('./config.json')

gulp.task('js', () => {
  return gulp
    .src(config.paths.assets + '/javascripts/*.js')
    .pipe(standard.reporter('default', { breakOnError: true, quiet: true }))
    .pipe(named())
    .pipe(gulp.dest(config.paths.dist + '/javascripts/'))
})
