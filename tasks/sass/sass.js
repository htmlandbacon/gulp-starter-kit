/**
 * Sass
 */
'use strict'
const gulp = require('gulp')
const postcss = require('gulp-postcss')
const sass = require('gulp-sass')
const sasslint = require('gulp-sass-lint')
const sourcemaps = require('gulp-sourcemaps')
const rename = require('gulp-rename')

const autoprefixer = require('autoprefixer')
const csswring = require('csswring')
const mqpacker = require('css-mqpacker')

const importOnce = require('node-sass-import-once')

const config = require('../config.json')

var options = {
  autoprefixer: {
    browsers: [ '> 2%', 'IE >= 8', 'iOS >= 7' ],
    cascade: false,
    map: true,
    remove: true
  },
  mqpacker: { sort: true },
  sass: {
    style: 'expanded',
    includePaths: [ 'node_modules' ],
    importer: importOnce
  }
}

gulp.task('sass', () => {
  return gulp
    .src(config.paths.assets + '/sass/*.scss')
    .pipe(sasslint({ config: '.lint.yml' }))
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError())
    .pipe(sass(options.sass).on('error', sass.logError))
    .pipe(
      postcss([
        autoprefixer(options.autoprefixer),
        csswring(options.csswring),
        mqpacker(options.mqpacker)
      ])
    )
    .pipe(rename({ extname: '.min.css' }))
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.paths.dist + '/stylesheets/'))
})
