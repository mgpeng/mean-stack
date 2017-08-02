// module.exports = require('./client-config/webpack.dev.js');
module.exports = function(env) {
  return require(`./client-config/webpack.${env}.js`)
}
