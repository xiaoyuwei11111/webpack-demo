const path = require('path')
const webpack = require('webpack')
const WebpackCommonConf = require('./webpack.common')
const { smart } = require('webpack-merge')
const { srcPath, distPath } = require('./path')

module.exports = smart(WebpackCommonConf, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: ['babel-loader'],
        include: srcPath,
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify('development')
    }),
    ],
  devServer: {
    port: 8080,
    contentBase: distPath,
    progress: true,
    open: true,
    compress: true,
    hot: true,
    proxy: {
      '/api1': 'http://localhost:3000',
      '/api2': {
        target: 'http://localhost:3000',
        pathRewrite: {
          '/api2': ''
        }
      }
    }
  }
})