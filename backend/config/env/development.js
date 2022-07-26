'use strict'

module.exports = {
  msHost: 'localhost', // Host address for http service of Managing Server
  msDomain: '', // Host Domain name (이 값이 ''이면 https 서버를 열지 않음 이 값으로 인증서 파일 열기를 시도함 'oracle.keyway.dev')
  msPort: '80', // Port for http service of Managing Server
  mssPort: '443', // Port for https service of Managing Server
  sslCertPath : '/etc/letsencrypt/live/', // 인증서 경로
  dbURL: 'mongodb://localhost/test', // DB url with user account
  uploadPath: '../uploads/', // file upoad path
  sessionSecret: 'Klinelex', // session secret code
}
