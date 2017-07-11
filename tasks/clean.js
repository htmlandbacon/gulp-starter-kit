/**
 * Clean
 */
'use strict'
const gulp = require('gulp')
const del = require('del')

const config = require('./config.json')

gulp.task('clean', () => {
  return del([ config.paths.dist ], { force: true })
})
