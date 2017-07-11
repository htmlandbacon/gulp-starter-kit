var express = require('express')
var path = require('path')

var app = express()

app.use('/public', express.static(path.join(__dirname, '/public')))
app.use('/public', express.static(path.join(__dirname, '/node_modules/govuk_template/assets')))
app.use('/public', express.static(path.join(__dirname, '/node_modules/govuk_frontend_toolkit')))
app.use('/public/images/icons', express.static(path.join(__dirname, '/node_modules/govuk_frontend_toolkit/images')))

var port = process.env.NODE_ENV || '8090'

app.listen(port);