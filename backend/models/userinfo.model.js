'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Userinfo = new Schema({
  name: String,
  number: String,
  addr: String,
  sex: String,
  id: String,
  pass: String,
})

Userinfo.set('toJSON', {
  getters: true,
  virtuals: true,
})

mongoose.model('Userinfo', Userinfo)
