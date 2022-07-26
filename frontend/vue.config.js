const path = require('path')

module.exports = {
  devServer: {
    // disableHostCheck: true,
    proxy: {
      // '/api/file/':{
      //   target: 'https://js.klinelexcsms.com',
      // },
      '/api':{
        target: "https://cats0713.keyway.dev/"
      },
      // '/api/kicc':{
      //   target: 'https://js.klinelexcsms.com:80'
      // },
    },
  },
  transpileDependencies: ['vuetify'],
  outputDir: path.join(__dirname, '../backend/public'),
  indexPath: 'index.html',
}
