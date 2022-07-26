'use strict'

const mongoose = require('mongoose')
const Notice = mongoose.model('Notice')
// const ConfigDB = mongoose.model('Config')

exports.searchData = function (req, res, next) {
  // console.log(req.body)
  if (req.body.ok) { // 데이터 조회
    // Notice.find({}, {"user": 1, "contents": 1, "date": 1}, (err, result) => {
    Notice.find({}, (err, result) => {
      if (err) {
        console.log('err: ', err)
        return res.status(204).send(err)
      } else {
        // console.log(result)
        return res.status(200).send(result)
      }
    })
  } else { // 필터링
    let filterBox = {}
    console.log(req.body)
    if (req.body.searchUser != null) { 
      // console.log('user없음')
      filterBox.user = { $regex: req.body.searchUser, $options: '$i' }
      // console.log(filterBox.user)
    }
    if (req.body.searchDate != null) { 
      // console.log('date없음')
      filterBox.date = req.body.searchDate
    }
    if (req.body.searchText != null) { 
      // console.log('content없음')
      filterBox.contents = { $regex: req.body.searchText }
    }
    console.log(filterBox)
    Notice.find(filterBox, (err, result) => {
      if (err) {
        console.log('err: ', err)
        return res.status(204).send(err)
      } else {
        // console.log(result)
        return res.status(200).send(result)
      }
    })
  }
}
exports.inData = function (req, res, next) {
  // console.log(req.body.user)
  Notice.create({
    user: req.body.user,
    date: req.body.data,
    contents: req.body.contents,
  }, (err) => { 
    return res.send(err)
  })
}