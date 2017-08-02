const webpack = require('webpack');
const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./helpers');
const OptimizeCssAssetsPlugin= require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const AotPlugin = require('@ngtools/webpack').AotPlugin;

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = {
  entry: {
    'polyfills': './client-src/polyfills',
    'vendor': './client-src/vendor',
    'main': './client-src/main-aot'
  },
  output: {
    path: path.resolve('dist-aot-plugin'),
    publicPath: '',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },
  resolve: {
    extensions: ['.js','.ts'] 
  },
  module: {
    rules: [
     {
        test: /\.ts$/,
        use: [
          // {
          //   loader: 'awesome-typescript-loader',
          //   options: { configFileName: helpers.root('client-src', 'tsconfig.json') }
          // } , 'angular2-template-loader','angular-router-loader?aot=true&genDir=dist-aot/',
             '@ngtools/webpack'
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
    new AotPlugin({
      tsConfigPath: path.join(process.cwd(), './client-src/tsconfig-aot.json'),
      entryModule: path.join(process.cwd(), './client-src/app/app.module#AppModule')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['main-aot', 'vendor', 'polyfills']
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
    ),
     new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true,
        unused:true,
        warnings: false
      },
      comments: false,
      parallel: {
        cache: true,
        workers: 2 // for e.g
      },
      sourceMap: false
    }),
    new ExtractTextPlugin({filename: '[name].[hash].css', allChunks: true}),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    }),
    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false // workaround for ng2
      }
    }),
    new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.(js|html|css)$/,
            threshold: 10240,
            minRatio: 0
    }),
  ],
  recordsOutputPath: path.join(__dirname, "../client-config/webpcak-compile-info", "records.json")
};
