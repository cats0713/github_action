'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Data = new Schema({
  // _id: Object,
  id: Number,
  title: String,
  image: String,
  content: String,
  pricce: Number,
})

Data.set('toJSON', {
  getters: true,
  virtuals: true,
})

mongoose.model('Data', Data)
