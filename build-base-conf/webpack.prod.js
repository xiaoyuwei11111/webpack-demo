const path = require('path')
const webpack = require('webpack')
const WebpackCommonConf = require('./webpack.common')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { smart } = require('webpack-merge')
const { srcPath, distPath } = require('./path')

module.exports = smart(WebpackCommonConf, {
  mode: 'production',
  output: {
    filename: 'bundle.[contentHash:8].js',
    path: distPath
  },
  module: {
   rules: [
     {
      test: /\.(png|jpg|jpeg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 5 * 1024,
          output: '/img/'
        }
      }
     }
   ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      ENV: JSON.stringify('production')
    })
  ],
  })