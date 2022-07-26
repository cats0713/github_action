'use strict'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const config = require('./config/config')

// db Init
require('./config/mongoose')()

const express = require('./config/express')
// const passport = require('./config/passport')
const http = require('http')
const https = require('https')
const fs = require('fs')

const session = require('express-session')

// Custom init
require('./config/init')()

// 
// passport.init()

const app = express()
const port = config.msPort
app.set('port', port)


// error 핸들러
const onError = (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`)
      process.exit(1)
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
const onListening = () => {
  const addr = server.address()
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`
  console.log(`Listening on ${bind} for HTTP`)
}

const server = http.createServer(app)
server.listen(config.msPort);
server.on('error', onError);
server.on('listening', onListening);

// https 설정
if(process.env.NODE_ENV !== 'development') {
  const options = {
    ca: fs.readFileSync(`${config.sslCertPath}${config.msDomain}/fullchain.pem`),
    key: fs.readFileSync(`${config.sslCertPath}${config.msDomain}/privkey.pem`),
    cert: fs.readFileSync(`${config.sslCertPath}${config.msDomain}/cert.pem`),
  }

  const onHttpsListening = () => {
    const addr = servers.address()
    const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`
    console.log(`Listening on ${bind} for HTTPS`)
  }

  const onHttpsError = (error) => {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    let httpsPort = servers.addr.port
    const bind = typeof httpsPort === 'string' ? `Pipe ${httpsPort}` : `Port ${httpsPort}`
    // handle specific listen errors with friendly messages
  
    switch (error.code) {
      case 'EACCES':
        console.error(`${bind} requires elevated privileges`)
        process.exit(1)
        break
      case 'EADDRINUSE':
        console.error(`${bind} is already in use`);
        process.exit(1)
        break
      default:
        throw error
    }
  }
  
  const servers = https.createServer(options, app)  
  servers.listen(config.mssPort)
  servers.on('error', onHttpsError)
  servers.on('listening', onHttpsListening)
}
