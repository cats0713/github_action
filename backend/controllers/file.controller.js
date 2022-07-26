'use strict'
const path = require('path')
const loadFile = `${__dirname}/../uploads/`
const fs = require('fs')

exports.upfile = function (req, res, next) {
  // console.log(req.file)
  if (req.file) {
    console.log(req.file)
    return res.json(req.file)
  }
}

exports.downFile = function (req, res, next) {
  // console.log(req.query)
  fs.readFile(loadFile + req.query.filename, function (err, data) {
    // console.log(loadFile + filename)
    // console.log('a')
    res.writeHead(200, { "Context-Type": "image/jpg" })
    res.write(data)
    res.end()
    // console.log(data)
  })
}

exports.downFileList = function (req, res, next) {
  fs.readdir(loadFile, function (err, filelist) {  // 배열 형태로 출력 \ 파일 이름을 가져왔어
    res.send(filelist)
    // console.log('a')
    // `https://cats0713.keyway.dev/api/download?filename=${i}`               :disabled="upLoadBtn"
  })
}

exports.deleteFileList = (req, res, next) => { 
  // console.log(req.body)
  if (req.body.filename) {
    try {
      if (fs.existsSync(loadFile + req.body.filename)) { 
        fs.unlink(loadFile + req.body.filename, (err) => { 
          if (err) {
            console.log(err)
            return res.send(false)
          } 
        })
      }
    } catch (error) {
      return res.send(error)
    }
    return res.send(true)
  }
}

exports.downImgFile = (req, res, next) => {
  // get 방식
  if (fs.existsSync(loadFile + req.body.filename)) { 
    return res.download(loadFile + req.body.filename, req.body.filename)
  }
}
