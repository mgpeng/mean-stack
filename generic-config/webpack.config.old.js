const webpack = require('webpack');
const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./helpers');


module.exports = {
  entry: {
    'polyfills': './public/polyfills',
    'vendor': './public/vendor',
    'main': './public/main'
  },
  // devtool: 'source-map',
  devtool: 'inline-source-map',
  stats:'verbose',
  resolve: {
    extensions: [ '.js', '.ts']
  },
  output: {
    path: 'public/build',
    filename: '[name].[hash].js'
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
      // {
      //   test: /\.css$/,
      //   exclude: helpers.root('public', 'app'),
      //   loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' })
      // },
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
      name: ['bootstrap', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      filename:'../../app/views/index.ejs',
      template: './app/views/index.ejs',
      inject: true
    }),
    // new ExtractTextPlugin("style.css"),
    new webpack.ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        // /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        /angular(\\|\/)core(\\|\/)@angular/,
        helpers.root('./public'), // location of your src
        { }
      )
  ]
};
