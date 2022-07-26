'use strict'

const express = require('express')
const morgan = require('morgan')
const compress = require('compression')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const path = require('path')

const config = require('./config')

const app = express()
const expressRouter = require('../routes/routes')

module.exports = function () {
  if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'))
  } else {
    app.use(compress())
  }

  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cookieParser(config.sessionSecret))
  app.use(express.static(path.join(__dirname, '../public')))

  app.use(session({
    saveUninitialized: true,
    resave: false,
    secret: config.sessionSecret,
    cookie: {
      maxAge: 1000 * 60 * 60 * 6,
    }
  }))

  // app.use(passport.initialize())
  // app.use(passport.session())

  expressRouter(app)

  app.use((err, req, res, next) => {
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'developement' ? err : {}

    console.log(err)
  })

  return app
}