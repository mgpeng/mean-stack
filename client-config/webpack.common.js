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
      // {
      //     test: /\.scss$/,
      //     exclude: helpers.root('client-src','app'),
      //     use: ExtractTextPlugin.extract({
      //         use: [{
      //             loader: "css-loader" ,options: { minimize: true }
      //         }, {
      //             loader: "sass-loader"
      //         }],
      //         // use style-loader in development
      //         fallback: "style-loader"
      //     })
      // },
      {
        test: /\.scss$/,
        include: helpers.root('client-src', 'app'),
        use: [{
               loader: 'raw-loader'
             },{
                loader: 'style-loader'
             },{
               loader: 'css-loader'
             },{
               loader: 'sass-loader'
             }]
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
      showErrors: true,
    }),
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
