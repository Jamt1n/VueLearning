const path = require('path');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, "www"),
    compress: false,
    port: 8080,
    // 虚拟打包路径，bundle.js没有真正生成
    publicPath: "/xuni/"
  }
}