const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
const path=require('path');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: path.resolve('dist'),
    // publicPath: 'http://localhost:8080/',
    publicPath: '',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    sourceMapFilename: '[name].map'
  },

  plugins: [
    new ExtractTextPlugin({
      filename:'[name].css',allChunks:true
    })
  ],

  // devServer: {
  //   historyApiFallback: true,
  //   stats: 'minimal'
  // }
});