'use strict'

const config = require('./config')
const mongoose = require('mongoose')

module.exports = function () {
  mongoose.Promise = global.Promise
  const db = mongoose.connect(config.dbURL)

  // Load Models
    require('../models/data.model')
    require('../models/user.model')
    require('../models/notice.model')
    require('../models/userinfo.model')
    return db
}