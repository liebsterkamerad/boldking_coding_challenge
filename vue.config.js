module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080
  },
  configureWebpack: {
    entry: {
      app: './src/main.js'
    }
  }
}
