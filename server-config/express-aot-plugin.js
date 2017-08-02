const path = require('path')
const config = require('./config');
const http=require('http');
const socketio=require('socket.io');
const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const MongoStore=require('connect-mongo')(session);
const passport=require('passport');
const configureSocket = require('./socketio');
const flash= require('connect-flash');

module.exports = (db)=>{
    const app=express();
    const server=http.createServer(app);
    const io=socketio.listen(server);

    if (process.env.NODE_ENV === 'development'){
        app.use(morgan('dev'));
    }else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }
    app.use(bodyParser.urlencoded({
        extended:true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    
    const mongoStore=new MongoStore({mongooseConnection:db.connection});
    app.use(session({
        saveUninitialized:true,
        resave:true,
        secret:config.sessionSecret,
        store:mongoStore
    }))

    // app.set('views','./app/views');
    // app.set('views','./client-src/dist');
    app.set('views','./dist-aot-plugin');
    app.set('view engine','ejs');
    
    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());

    // app.use('/', express.static(path.resolve('./cleint-src')));
    app.use('/', express.static(path.resolve('./dist-aot-plugin')));
    app.use('/lib', express.static(path.resolve('./node_modules')));

    require('../server-src/routes/users.server.routes')(app);
    require('../server-src/routes/articles.server.routes')(app);
    require('../server-src/routes/index.server.routes')(app);

    configureSocket(server, io, mongoStore);

    return server;
}