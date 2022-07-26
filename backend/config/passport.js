'use strict'

const passport = require('passport')
const mongoose = require('mongoose')
// const Admin = mongoose.model('Admin')
const config = require('./config')

module.exports = {
  init: function () {
    passport.serializeUser(function (user, done) {
      done(null, user.id)
    })
  
    passport.deserializeUser(function (id, done) {
      // Admin.findOne({ _id: id }, '-password -salt', function (err, user) {
      //   done(err, user)
      // })
      done(err, {}) // 임시
    })
  
    require('./passportStrategies/local.js')()
  },

  isAuthenticated: (req, res, next) => {
    const result = req.isAuthenticated()
    if(result) {
      return next()
    } else if (req.url.indexOf('/api/') !== -1) {
      console.log('Request api, isAuthenticated:', result)
      console.log('RemoteIP: ', req.connection.remoteAddress)
      if (req.method === 'POST') {
        console.log(req.body)
      }
      return res.status(401).send(null) // unathorized
    } else {
      console.log('Request non-api, isAuthenticated:', result)
      console.log('RemoteIP: ', req.connection.remoteAddress)
      if (req.method === 'POST') {
        console.log(req.body)
      }
      return res.redirect("/");
    }
    
  }
}
