/**
 * Watch
 */
'use strict'
const gulp = require('gulp')
const config = require('./config.json')

// Watch for Sass changes
gulp.task('watch', () => {
  gulp.watch(config.paths.assets + 'sass/**', [ 'sass' ])
  gulp.watch(config.paths.assets + 'js/**', [ 'js' ])
  gulp.watch(config.paths.assets + 'images/**', [ 'copy' ])
  gulp.watch(config.paths.assets + 'fonts/**', [ 'copy' ])
})
