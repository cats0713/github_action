'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
  userid: String,
  pass: String,
  name: String,
  addr: String,
  tel: Number,
  sex: Number,
})

User.set('toJSON', {
  getters: true,
  virtuals: true,
})

mongoose.model('User', User)
