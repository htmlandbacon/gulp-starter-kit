/*
  nodemon.js
  ===========
  uses nodemon to run a server, watches for javascript and json changes
*/

var fs = require('fs')
var path = require('path')
var gulp = require('gulp')
var nodemon = require('gulp-nodemon')
var config = require('./config.json')

gulp.task('serve:local', function () {
  nodemon({
    script: 'local.js',
    ext: 'js, json',
    ignore: [config.nodeModules + '*']
  }).on('quit', function () {
    // remove .port.tmp if it exists
    try {
      fs.unlinkSync(path.join(__dirname, '/../.port.tmp'))
    } catch (e) {}

    process.exit(0)
  })
})