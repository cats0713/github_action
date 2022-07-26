'use strict'

const express = require('express')
const router = new express.Router()
// '/' 루트 경로로 http 요청 시 컨트롤러
const indexController = require('../controllers/index.controller')

//파일 업로드 관련
const multer = require('multer')
const path = require('path')
const multerStorage = multer.diskStorage({
  destination: function (req, file, callback) {
    console.log('a')
        callback(null, `${__dirname}/../uploads`)
    },
    filename: function (req, file, callback) {
        const extension = path.extname(file.originalname)
        callback(null, `${Date.now()}${extension}`)
    }
})
const upload = multer({ storage: multerStorage })

// 페이지 및 api 요청 시 컨트롤러 모듈 추가 (페이지 이동은 Vue Router 내에서 이루어지기 때문에 여기는 API 라우팅이 대부분임)
const exampleController = require('../controllers/example.controller')
const dataController = require('../controllers/data.controller')
const userController = require('../controllers/user.controller')
const userinfoController = require('../controllers/userinfo.controller')
const NoticeController = require('../controllers/notice.controller')
const fileController = require('../controllers/file.controller')

module.exports = function (app) {
  app.use('/api', router)

  // /api 경로에서 걸리지지 않은 라우팅에 대해 indexController router 마운트
  app.get('/*', indexController)

  // api 라우터 정의 (사용법은 express router 참조)
  // router.post('/example/getInfo', eampleController.getInfo)
  router.post('/test', exampleController.getInfo)
  router.post('/data', dataController.getData)

  // 유저정보/로그인
  router.post('/user/singup', userController.insertData)
  router.post('/user/list', userController.listData)
  
  // 게시판
  router.post('/notice', NoticeController.searchData)
  router.post('/notice/indata', NoticeController.inData)

  //  
  router.post('/userinfo/search', userinfoController.userinfosearch)
  router.post('/userinfo/in', userinfoController.userinfoInsert)
  router.post('/userinfo/idcheck', userinfoController.userinfoIdCheck)
  // /api 경로 아래에 위에서 정의한 router 마운트
  
  router.post('/upload', upload.single('file'), fileController.upfile)

  router.get('/download', fileController.downFile)
  router.get('/download/all', fileController.downFileList)
  router.post('/download/del', fileController.deleteFileList)
  router.post('/download/down', fileController.downImgFile)

}