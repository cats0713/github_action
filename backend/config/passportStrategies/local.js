'use strict'

const passport = require('passport')
const { Strategy: LocalStrategy } = require('passport-local')
const Admin = require('mongoose').model('Admin')

module.exports = function () {
  passport.use(new LocalStrategy({
      usernameField: 'userName',
      passwordField: 'userPassword',
    },
    function(userName, password, done) {
      Admin.findOne({
        userName : userName
      }, 
      function (err, user) {
        if (err) {
          return done(err);
        } else if (!user) {
          return done(null, false, {
            message: 'UnknownUser'
          })
        } else if (!user.authenticate(password)) {
          return done(null, false, {
            message: 'InvalidPassword'
          })
        } else {
          return done(null, user)
        }
      })
    }
  ))
}