/**
 * Gulp setup
 */
'use strict'
const gulp = require('gulp')

/**
 * Other modules
 */
const requireDir = require('require-dir')
const runSequence = require('run-sequence')

/**
 * Child task
 * Require all the task modules in `/tasks`.
 * Include all subfolders
 */
requireDir('./tasks', { recurse: true })

/**
 * Main tasks
 */
// Shared build task
gulp.task('build', [ 'clean' ], done => {
  runSequence([ 'sass', 'js', 'copy' ], done)
})

// Default tasks
gulp.task('default', done => {
  runSequence('build', 'copy', done)
})

// Development tasks
gulp.task('dev', done => {
  runSequence('build', 'copy', [ 'watch' ], done)
})

// local tasks
gulp.task('local', done => {
  runSequence('dev', 'serve:local', [ 'watch' ], done)
})
