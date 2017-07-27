const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
const path=require('path');
const OptimizeCssAssetsPlugin= require('optimize-css-assets-webpack-plugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
  // devtool: 'source-map',
  output: {
    path: path.resolve('dist'),
    publicPath: '',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },
  module: {
    rules: [
      {
          test: /\.scss$/,
          exclude: helpers.root('client-src','app'),
          use: ExtractTextPlugin.extract({
              use: [{
                  loader: "css-loader" ,options: { minimize: true }
              }, {
                  loader: "sass-loader"
              }],
              // use style-loader in development
              fallback: "style-loader"
          })
      },
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false,
      // parallel: {
      //   cache: true,
      //   workers: 2 // for e.g
      // }
    }),
    new ExtractTextPlugin('[name].[hash].css'),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.scss$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: {removeAll: true } },
      canPrint: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    }),
    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false // workaround for ng2
      }
    })
  ]
});