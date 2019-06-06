// External Imports
const express = require('express')
const hbs = require('express-handlebars')
const server = express()

// Internal Imports
const homeRoutes = require('./routes/home.routes.js')

// Middleware
server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({extended: false}))

// Router Middlewares
server.use('/', homeRoutes)

module.exports = server