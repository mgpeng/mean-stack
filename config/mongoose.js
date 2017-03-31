const config = require('./config');
const mongoose = require('mongoose');

module.exports = function(){
    mongoose.Promise = global.Promise;
    const db = mongoose.connect(config.db);
    require('../app/models/user.server.model');
    // return db;
    dbconn=mongoose.connection;
    dbconn.on('error',console.error.bind(console,'connection database error !'));
    dbconn.once('open',()=>{
        return db;
    });
};