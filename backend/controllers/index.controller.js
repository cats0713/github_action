'use strict'
const express = require('express')
const modPassport = require('../config/passport')
const path = require('path')
const router = new express.Router()

  // http 요청 시 로그인 여부 확인, 안되어있으면 '/' 경로로 리디렉
  // router.all('/**', modPassport.isAuthenticated, (req, res, next) => {
  //   next()
  // })
  router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'))
  });
  router.get('/*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'))
  });

module.exports = router;