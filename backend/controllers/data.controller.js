'use strict'

const mongoose = require('mongoose')
const Data = mongoose.model('Data')
// const ConfigDB = mongoose.model('Config')



exports.getData = function (req, res, next) {
  console.log(req.body.ok)
  if (req.body.ok) {
    Data.find({}, (err, result) => {
      if (err) {
        console.log('err: ', err)
        return res.status(204).send(err)
      } else {
        console.log(result)
        return res.status(200).send(result)
      }
    })
    // return res.status(200).send(Data.find({}))
  } else {
    return res.status(400).send(null)
  }
}

// exports.getData = function (req, res, next) { // req, res, next 순서 중요
//   console.log(req.body.b)
//   return res.status(200).send(req.body.b)
// }