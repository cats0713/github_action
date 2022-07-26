'use strict'

const mongoose = require('mongoose')
const User = mongoose.model('User')
// const ConfigDB = mongoose.model('Config')



exports.insertData = function (req, res, next) {
  // console.log(req.body.email)
  User.find({'name' : req.body.name}, (err, result) => {
      if (err) {
        console.log('err: ', err)
        return res.status(204).send(err)
      } else {
        console.log(result)
        return res.status(200).send(result)
      }
    })
}

exports.listData = function (req, res, next) {
  // console.log(req.body.email)
  User.find({'name' : req.body.name}, (err, result) => {
      if (err) {
        console.log('err: ', err)
        return res.status(204).send(err)
      } else {
        console.log(result)
        return res.status(200).send(result)
      }
    })
}