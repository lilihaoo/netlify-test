const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    // Loader
    config.module
      .rule('svg')
      .test(/\.(swf|ttf|eot|svg|woff(2))(\?[a-z0-9]+)?$/)
      .use('file-loader')
      .loader('file-loader')
      .end()
  },
  configureWebpack: {
    plugins: [
      new MonacoWebpackPlugin()
    ]
  }
}
