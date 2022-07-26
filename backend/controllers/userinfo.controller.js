'use strict'

const mongoose = require('mongoose')
const Userinfo = mongoose.model('Userinfo')
//const bcrypt = require('bcrypt')
// const ConfigDB = mongoose.model('Config')

//const saltRoudns = 10

exports.userinfosearch = function (req, res, next) {
  if (req.body.id || req.body.pass) {
    Userinfo.find({
      id: req.body.id,
      pass: req.body.pass
    }, (err, result) => {
      if (err) {
        console.log('err: ', err)
        return res.status(204).send(err)
      } else if (result == '') {
        console.log(result)
        return res.status(200).send(false)
      } else { 
        return res.status(200).send(true)
      }
    })
    // return res.status(200).send(Data.find({}))
  } else {
    return res.status(400).send(null)
  }
}

exports.userinfoInsert = function (req, res, next) {
  Userinfo.find({
    id: req.body.id
  }, (err, result) => {
    if (err) {
      console.log('err: ', err)
      return res.status(204).send(err)
    } else {
      // console.log(res)
      // return res.status(200).send(result)
      if (result == '') { //찾아본 결과 없음(회원가입 가능)
        //req.body.pass =  bcrypt.hash(user.password, saltRoudns)
        console.log(req.body.pass)
        Userinfo.create({
          id: req.body.id,
          pass: req.body.pass,
          name: req.body.name,
          number: req.body.number,
          addr: req.body.addr,
          sex: req.body.sex,
        }, (err) => { 
          return res.send(err)
        })
        return res.status(200).send(true)
      } else {
        return res.status(200).send(false)
      }
    }
  })
}

exports.userinfoIdCheck = function (req, res, next) {
  Userinfo.find({
    id: req.body.id
  }, (err, result) => {
    if (err) {
      console.log('err: ', err)
      return res.status(204).send(err)
    } else {
      if (result == '') { //찾아본 결과 없음(회원가입 가능)
        return res.status(200).send(true)
      } else {
        console.log(result)
        return res.status(200).send(false)
      }
    }
  })
}