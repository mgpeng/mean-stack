const config = require('./config');
const mongoose = require('mongoose');

module.exports = function(){
    mongoose.Promise = global.Promise;
    const db = mongoose.connect(config.db);
    require('../server-src/models/user.server.model');
    require('../server-src/models/article.server.model');
    return db;
    // dbconn=mongoose.connection;
    // dbconn.on('error',console.error.bind(console,'connection database error !'));
    // dbconn.once('open',()=>{
    //     return db;
    // });
};