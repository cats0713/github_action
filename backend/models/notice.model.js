'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Notice = new Schema({
  user: String,
  date: String,
  contents: String,
})

Notice.set('toJSON', {
  getters: true,
  virtuals: true,
})

mongoose.model('Notice', Notice)
