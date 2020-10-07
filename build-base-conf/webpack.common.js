const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { srcPath } = require('./path')

module.exports = {
  entry: path.join(srcPath, 'index'),
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader' , 'postcss-loader'] 
      },
      {
        test: /\.less$/,
        loader: ['style-loader', 'css-loader' , 'less-loader'] 
      },
    ] 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(srcPath, 'index.html'),
      filename: 'index.html'
    })
  ],
}
 