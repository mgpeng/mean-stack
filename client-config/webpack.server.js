const path=require('path');
const webpack=require('webpack');
const fs = require('fs');
// const nodeExternals = require('webpack-node-externals');
const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });
module.exports = {
  entry: {
    'server': './server'
  },
  output: {
    path: path.resolve('dist-server'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js','.json'] 
  },
  target: 'node',
  externals: nodeModules,//'fs','ws'],
  module: {
    rules: [
      {
        test: /\.ejs$/,
        use: ['raw-loader']
      },
    ],
    noParse: /ws/
  },
  devtool: 'sourcemap',
  plugins: [
    new webpack.NormalModuleReplacementPlugin(
        /require(\'socket.io-client\/package\').version/, 
        require('socket.io-client/package').version
      ),
    new webpack.IgnorePlugin(/\.(css|less|scss)$/),
    new webpack.BannerPlugin({
                              banner: 'require("source-map-support").install();',
                              raw: true, entryOnly: false })
  ]
};

