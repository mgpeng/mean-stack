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
  module: {
    rules: [
        {
          test: /\.scss$/,
          exclude: helpers.root('client-src','app'),
          use: ExtractTextPlugin.extract({
              use: [{
                  loader: "css-loader" 
              }, {
                  loader: "sass-loader"
              }],
              // use style-loader in development
              fallback: "style-loader"
           })
        }
     ]
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