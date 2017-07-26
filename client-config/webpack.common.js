const webpack = require('webpack');
const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./helpers');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    'polyfills': './client-src/polyfills',
    'vendor': './client-src/vendor',
    'main': './client-src/main'
  },
  resolve: {
    extensions: [ '.js', '.ts']
  },
  // output: {
  //   path: path.resolve('client-src','./dist'),
  //   filename: '[name].[hash].js',
  //   publicPath: 'dist/',
  //   sourceMapFilename: '[name].map'
  // },
  module: {
    rules: [
     {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: { configFileName: helpers.root('client-src', 'tsconfig.json') }
          } , 'angular2-template-loader','angular2-router-loader'
        ]
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: ['file-loader?name=assets/[name].[hash].[ext]']
      },
      {
        test: /\.css$/,
        exclude: helpers.root('client-src','app'),
        loader: ExtractTextPlugin.extract({ 
             fallback: 'style-loader', use: ['css-loader?sourceMap']
            })
      },
      {
        test: /\.css$/,
        include: helpers.root('client-src', 'app'),
        use: ['raw-loader']
      },
      {
        test: /\.ejs$/,
        use: ['raw-loader']
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin([helpers.root('/dist/*.*')]),
    // new ForkCheckerPlugin(),  can't find this plugin
    new webpack.optimize.CommonsChunkPlugin({
      name: ['main', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      filename:'index.ejs',
      template: './server-src/views/index-origin.ejs',
      // template: './client-src/index-origin.ejs',
      showErrors: true,
    }),
    // new ExtractTextPlugin({
    //     filename: '[name].css'
    // }),
    new webpack.ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        // /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        /angular(\\|\/)core(\\|\/)@angular/,
        helpers.root('./client-src'), // location of your src
        {}
      )
  ],
  recordsOutputPath: path.join(__dirname, "../client-config/webpcak-compile-info", "records.json")
};
