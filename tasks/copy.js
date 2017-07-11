/**
 * Copy
 */
'use strict'
const gulp = require('gulp')
const config = require('./config.json')

gulp.task('copy', function () {
  return gulp
    .src([
      '!' + config.paths.assets + 'sass{,/**/*}',
      '!' + config.paths.assets + 'js{,/**/*}',
      config.paths.assets + '**/*'
    ])
    .pipe(gulp.dest(config.paths.dist))
})
