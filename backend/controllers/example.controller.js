'use strict'

const mongoose = require('mongoose')
// const Config = mongoose.model('Config')

exports.getInfo = function (req, res, next) { // req, res, next 순서 중요
  console.log(req.body.a)
  return res.status(200).send(req.body.a)
}