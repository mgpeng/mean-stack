const webpack = require('webpack');
const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./helpers');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    'polyfills': './public/polyfills',
    'vendor': './public/vendor',
    'main': './public/main'
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: [ '.js', '.ts']
  },
  output: {
    path: path.resolve('public','./build'),
    filename: '[name].[hash].js',
    publicPath: 'build/',
    sourceMapFilename: '[name].map'
  },
  module: {
    rules: [
     {
        test: /\.ts$/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: { configFileName: helpers.root('public', 'tsconfig.json') }
          } , 'angular2-template-loader','angular2-router-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        include: helpers.root('public', 'app'),
        loader: 'raw-loader'
      },
      {
        test: /\.ejs$/,
        use: 'raw-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['main', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      filename:'index.ejs',
      template: './app/views/index-origin.ejs',
      inject: true
    }),
    new webpack.ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        // /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        /angular(\\|\/)core(\\|\/)@angular/,
        helpers.root('./public'), // location of your src
        { }
      )
  ]
};