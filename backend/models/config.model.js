'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Config = new Schema({

})

Config.set('toJSON', {
  getters: true,
  virtuals: true,
})

mongoose.model('Config', Config)
