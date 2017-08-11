require("source-map-support").install();
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8)("./"+process.env.NODE_ENV+'.js');

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const User= __webpack_require__(1).model('User');
const passport = __webpack_require__(0);

exports.requireLogin=(req,res,next)=>{
    if(!req.isAuthenticated){
        return res.status(401).send({message:'User is not logged in'});
    }
    next();
};

exports.saveOAuthUserProfile = function(req, profile, done) {
  User.findOne({
    provider: profile.provider,
    providerId: profile.providerId
  }, function(err, user) {
    if (err) {
      return done(err);
    } else {
      if (!user) {
        const possibleUsername = profile.username ||
        ((profile.email) ? profile.email.split('@')[0] : '');

        User.findUniqueUsername(possibleUsername, null,
        function(availableUsername) {
          profile.username = availableUsername;

          user = new User(profile);
          user.save((err) => {
            if (err) {
              const message = _this.getErrorMessage(err);
              console.log("Check _this meaning");
              console.log(_this);
              req.flash('error', message);
              return res.redirect('/signup');
            }

            return done(err, user);
          });
        });
      } else {
        return done(err, user);
      }
    }
  });
};

getErrorMessage=(err)=>{
    let message='';
    if (err.code){
        switch(err.code){
            case 11000:
            case 11001:
               message='Username already exists';
               break;
            default:
               message='Something went wrong';
        }
    }else{
        for (let errName in err.errors){
            if (err.errors[errName].message)
                 message=err.errors[errName].message;
        }
    }
    console.log('Error message in getErrorMessage');
    console.log(message);
    return message;
};
exports.renderSignin=(req,res,next)=>{
    if(!req.user){
        res.render('signin',{
                   title:'Sign-in form',
                   messages:req.flash('error')||req.flash('info')
                });
    }else{
        return res.redirect('/');
    }
};
exports.renderSignup=(req,res,next)=>{
    if(!req.user){
        res.render('signup',{
                   title:'Sign-up form',
                   messages:req.flash('error')
                });
    }else{
        return res.redirect('/');
    }
};
exports.signin=(req,res,next)=>{
    passport.authenticate('local',(err,user,info)=>{
        if(err||!user){
            res.status(400).send(info);
        }else{
            user.password=undefined;
            user.salt=undefined;
            req.login(user,(err)=>{
               if(err){
                res.status(400).send(err);
               }else{
                res.json(user);
               }
            });
        }
    })(req,res,next);
};
// exports.signup=(req,res,next)=>{
    // if(!req.user){
    //     const user=new User(req.body);
    //     user.provider='local';
    //     user.save((err)=>{
    //         if(err){
    //             const message=getErrorMessage(err);
    //             req.flash('error',message);
    //             return res.redirect('/signup');
    //         }
    //         req.login(user,(err)=>{
    //             if(err) return next(err);
    //             return res.redirect('/');
    //         });
    //     });
    // }else{
    //     return res.redirect('/');
    // }
// };
exports.signup = function(req, res) {
  const user = new User(req.body);
  user.provider = 'local';

  user.save((err) => {
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      // Remove sensitive data before login
      user.password = undefined;
      user.salt = undefined;

      req.login(user, function(err) {
        if (err) {
          res.status(400).send(err);
        } else {
          res.json(user);
        }
      });
    }
  });
};

exports.signout=(req,res)=>{
    req.logout();
    res.redirect('/');
};


exports.create=(req,res,next)=>{
    const user=new User(req.body);
    user.save((err)=>{
        if (err){
            return next(err);
        }else{
            res.status(200).json(user);
        }
    });
};
exports.list=(req,res,next)=>{
    User.find({},(err,data)=>{
        if (err){
            return next(err);
        }else{
            res.status(200).json(data);
        }
    })
}
exports.read=(req,res)=>{
    res.json(req.user);
};
exports.userByID=(req,res,next,id)=>{
    User.findOne({
        _id:id
    },(err,user)=>{
        if (err){
            return next(err);
        }else{
            req.user=user;
            next();
        }
    });
};
exports.update=(req,res,next)=>{
    User.findByIdAndUpdate(req.user.id,req.body,{
        'new':true},(err,user)=>{
            if (err){
                return next(err);
            }else{
                res.status(200).json(user);
            }
    });
};
exports.delete=(req,res,next)=>{
    req.user.remove((err,user)=>{
            if (err){
                return next(err);
            }else{
                res.status(200).json(user);
            }
    });
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const configureMongoose = __webpack_require__(7);  //--  mongoose should be load first
const configureExpress=__webpack_require__(15);
const configurePassport=__webpack_require__(35);

const db=configureMongoose();
const app=configureExpress(db);
const passport=configurePassport();

app.listen(3000);
module.exprots = app;
console.log("Express app runing in port 3000");
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

const config = __webpack_require__(2);
const mongoose = __webpack_require__(1);

module.exports = function(){
    mongoose.Promise = global.Promise;
    const db = mongoose.connect(config.db);
    __webpack_require__(12);
    __webpack_require__(14);
    return db;
    // dbconn=mongoose.connection;
    // dbconn.on('error',console.error.bind(console,'connection database error !'));
    // dbconn.once('open',()=>{
    //     return db;
    // });
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./development.js": 9,
	"./production.js": 10,
	"./test.js": 11
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 8;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {
  db:'mongodb://localhost/mean',
  sessionSecret:'developmentSessionSecretString',
  viewEngine: 'ejs',
  facebook: {
    clientID: '197836114050020',
    clientSecret: 'aeca2aa61f62b08ea08b1780cba491d4',
    callbackURL: 'http://localhost:3000/api/oauth/facebook/callback'
  },
  twitter: {
    clientID: '08h4XzUCu8c3g5RfhSAuQjquP',
    clientSecret: 'S8ZKzLkCPPy2bFHSjvMXnUqA6QMLQsRULwQ5eJ8u3mfbdovmED',
    callbackURL: 'http://localhost:3000/api/oauth/twitter/callback'
  },
  google: {
    clientID: '842162122191-sdv3ue976kjcq9as2o4ki5pg39a6ct0o.apps.googleusercontent.com',
    clientSecret: 'tc_k6kL9B9PmeCwy70wW3TLT',
    callbackURL: 'http://localhost:3000/api/oauth/google/callback'
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {

};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {
  db:'mongodb://localhost/mean-test',
  sessionSecret:'developmentSessionSecretString',
  viewEngine: 'ejs',
  facebook: {
    clientID: '197836114050020',
    clientSecret: 'aeca2aa61f62b08ea08b1780cba491d4',
    callbackURL: 'http://localhost:3000/api/oauth/facebook/callback'
  },
  twitter: {
    clientID: '08h4XzUCu8c3g5RfhSAuQjquP',
    clientSecret: 'S8ZKzLkCPPy2bFHSjvMXnUqA6QMLQsRULwQ5eJ8u3mfbdovmED',
    callbackURL: 'http://localhost:3000/api/oauth/twitter/callback'
  },
  google: {
    clientID: '842162122191-sdv3ue976kjcq9as2o4ki5pg39a6ct0o.apps.googleusercontent.com',
    clientSecret: 'tc_k6kL9B9PmeCwy70wW3TLT',
    callbackURL: 'http://localhost:3000/api/oauth/google/callback'
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

const mongoose=__webpack_require__(1);
const crypto=__webpack_require__(13);
const Schema= mongoose.Schema;
const UserSchema=new Schema({
    firstName:String,
    lastName:String,
    email:{
        type:String,
        match:[/.+\@.+\..+/,"Please fill a valid e-mail address"]
    },
    username:{
        type:String,
        trim:true,
        unique:true,
        required:'Username is required'
    },
    password:{
        type:String,
        validate:[(password)=>{
            return password && password.length>6;
        },'Password should be longer']
    },
    salt:{
        type:String
    },
    provider:{
        type:String,
        required:'Provider is required'
    },
    providerId:String,
    providerData:{},
    created:{
        type:Date,
        default:Date.now
    },
    website:{
        type:String,
        get: (url)=>{
            if (!url){
                // url="Empty Url";
                return url;
            }else{
                if(url.indexOf('http://')!==0 && url.indexOf('https://')!==0){
                    url='http://'+url;
                }
            }
            return url;
        }
    }
});
UserSchema.virtual('fullName')
          .get(function(){return this.firstName+' '+this.lastName;})
          .set(function(fullName){
              const splitName=fullName.split(' ');
              this.firstName=splitName[0] || '';
              this.lastName=splitName[1] || '';
          });
UserSchema.pre('save',function(next){
    if (this.password){
        this.salt=new Buffer(crypto.randomBytes(16).toString('base64'),'base64');
        this.password=this.hashPassword(this.password);
    }
    next();
});
UserSchema.methods.hashPassword=function(password){
    return crypto.pbkdf2Sync(password,this.salt,10000,64).toString('base64');
};
UserSchema.methods.authenticate=function(password){
    console.log('inside UserSchema.methods.authenticate check this keyword');
    console.log(this);
    return this.password === this.hashPassword(password);
};
UserSchema.statics.findUniqueUsername=function(username,suffix,callback){
    var possibleUsername=username+(suffix||'');
    console.log('inside UserSchema.statics.findUniqueUsername  check this keyword');
    console.log(this);
    this.findOne({username:possibleUsername},(err,user)=>{
        if(!err){
            if (!user){
                callback(possibleUsername);
            }else{
                return this.findUniqueUsername(username,(suffic||0)+1,callback);
            }
        }else{
            callback(null);
        }
    });
};
UserSchema.set('toJSON',{getters:true,virtuals:true});
mongoose.model('User',UserSchema);
const PostSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:Schema.ObjectId,
        ref:'User'
    }
});
mongoose.model('Post',PostSchema);



/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

const mongoose=__webpack_require__(1);
const Schema=mongoose.Schema;

const ArticleSchema=new Schema({
    created:{
        type:Date,
        default:Date.now
    },
    title:{
        type:String,
        default:'',
        trim:true,
        required:'Title can\'t be blank'
    },
    content:{
        type:String,
        default:'',
        trim:true
    },
    creator:{
        type:Schema.ObjectId,
        ref:'User'
    }
});
mongoose.model('Article',ArticleSchema);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

const path = __webpack_require__(16)
const config = __webpack_require__(2);
const http=__webpack_require__(17);
const socketio=__webpack_require__(18);
const express = __webpack_require__(19);
const morgan = __webpack_require__(20);
const compress = __webpack_require__(21);
const bodyParser = __webpack_require__(22);
const methodOverride = __webpack_require__(23);
const session = __webpack_require__(24);
const MongoStore=__webpack_require__(25)(session);
const passport=__webpack_require__(0);
const configureSocket = __webpack_require__(26);
const flash= __webpack_require__(29);

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
    app.set('views','./dist');
    app.set('view engine','ejs');
    
    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());

    // app.use('/', express.static(path.resolve('./cleint-src')));
    app.use('/', express.static(path.resolve('./dist')));
    app.use('/lib', express.static(path.resolve('./node_modules')));

    __webpack_require__(30)(app);
    __webpack_require__(31)(app);
    __webpack_require__(33)(app);

    configureSocket(server, io, mongoStore);

    return server;
}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("method-override");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("connect-mongo");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

const config = __webpack_require__(2);
const cookieParser = __webpack_require__(27);
const passport = __webpack_require__(0);
const configureChat = __webpack_require__(28);

module.exports = function(server, io, mongoStore) {
  io.use((socket, next) => {
    cookieParser(config.sessionSecret)(socket.request, {}, (err) => {
      const sessionId = socket.request.signedCookies['connect.sid'];

      mongoStore.get(sessionId, (err, session) => {
        socket.request.session = session;

        passport.initialize()(socket.request, {}, 
                     () => {passport.session()(socket.request, {}, () => {
                                if (socket.request.user) {
                                next(null, true);
                                } else {
                                next(new Error('User is not authenticated'), false);
                                }
                             })
                          });
      });
    });
  });
  io.on('connection', (socket) => {
    configureChat(io, socket);
  });
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function(io, socket) {
  io.emit('chatMessage', {
    type: 'status',
    text: 'connected',
    created: Date.now(),
    username: socket.request.user.username
  });

  socket.on('chatMessage', (message) => {
    message.type = 'message';
    message.created = Date.now();
    message.username = socket.request.user.username;

    io.emit('chatMessage', message);
  });

  socket.on('disconnect', () => {
    io.emit('chatMessage', {
    type: 'status',
    text: 'disconnected',
    created: Date.now(),
    username: socket.request.user.username
    });
  });
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("connect-flash");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

const users=__webpack_require__(3);
const passport = __webpack_require__(0);

module.exports=(app)=>{
    app.route('/users')
        .post(users.create)
        .get(users.list);
        
    app.route('/users/:userId')
        .get(users.read)
        .put(users.update)
        .delete(users.delete);
        
    app.param('userId',users.userByID);

    app.route('/api/auth/signup')
    //    .get(users.renderSignup)
       .post(users.signup);

    app.route('/api/auth/signin')
    //    .get(users.renderSignin)
       .post(passport.authenticate('local',{
                successRedirect:'/',
                failureRedirect:'/signin',
                failureFlash:true
       }));
    app.get('/api/auth/signout',users.signout);

    app.get('/api/oauth/facebook', passport.authenticate('facebook', {
        failureRedirect: '/signin'
    }));

    app.get('/api/oauth/facebook/callback', passport.authenticate('facebook', {
        failureRedirect: '/signin',
        successRedirect: '/'
    }));

    app.get('/api/oauth/twitter', passport.authenticate('twitter', {
        failureRedirect: '/signin'
    }));

    app.get('/api/oauth/twitter/callback', passport.authenticate('twitter', {
        failureRedirect: '/signin',
        successRedirect: '/'
    }));

    app.get('/api/oauth/google', passport.authenticate('google', {
        failureRedirect: '/signin',
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ]
    }),function(req, res) {

   //***HERE this causes that error
              //cookies.setCookie(res, 'NAME', 'VALUE');
   //
    
  	console.log("Google Login successfull");

    res.redirect('/');}
    );

    app.get('/api/oauth/google/callback', passport.authenticate('google', {
        failureRedirect: '/signin',
        successRedirect: '/'
    }));
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

const users=__webpack_require__(3);
const articles=__webpack_require__(32);

module.exports=(app)=>{
    app.route('/api/articles')
       .get(articles.list)
       .post(users.requireLogin,articles.create);
    
    app.route('/api/articles/:articleId')
       .get(articles.read)
       .put(users.requireLogin,articles.hasAuthorization,articles.update)
       .delete(users.requireLogin,articles.hasAuthorization,articles.delete);
    
    app.param('articleId',articles.articleByID);
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

const Article=__webpack_require__(1).model('Article');

getErrorMessage=(err)=>{
    if(err.errors){
        for (let errName in err.errors){
            if (err.errors[errName].message) 
                return err.errors[errName].message ;
        }
    }else{
        return 'Unknown server error';
    }
};

exports.create=(req,res)=>{
    const article=new Article(req.body);
    article.creator=req.user;
    article.save((err)=>{
        if(err){
            return res.status(400).sent({
                message:getErrorMessage(err)
            });
        }else{
            res.status(200).json(article);
        }
    });
};

exports.list=(req,res)=>{
    Article.find().sort('-created')
           .populate('creator','firstName lastName fullName')
           .exec((err,articles)=>{
               if(err){
                   return res.status(400).send({
                    message:getErrorMessage(err)
                   });
               }else{
                   res.status(200).json(articles);
               }
           });
};

exports.articleByID=(req,res,next,id)=>{
    Article.findById(id)
           .populate('creator','firstName lastName fullName')
           .exec((err,article)=>{
                if (err) return next(err);
                if (!article) 
                         return next(new Error('Failed to load article '+id));
                req.article=article;
                next();
            });
};

exports.read=(req,res)=>{
    res.status(200).json(req.article);
};

exports.update=(req,res)=>{
    const article=req.article;
    article.title=req.body.title;
    article.content=req.body.content;
    article.save((err)=>{
        if(err){
            return res.status(400).send({message:getErrorMessage(err)});
        }else{
            res.status(200).json(article);
        }
    });
};

exports.delete=(req,res)=>{
    const article=req.article;
    article.remove((err)=>{
        if(err){
            return res.status(400).send({message:getErrorMessage(err)});
        }else{
            res.status(200).json(article);
        }
    });
};

exports.hasAuthorization=(req,res,next)=>{
    if(req.article.creator.id!==req.user.id){
        return res.status(403).send({message:'User is not authorized'});
    }
    next();
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (app) => {
    const index=__webpack_require__(34);
    // app.get('/',index.render);
    app.get('/*',index.render);
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

exports.render = (req,res) => {
    if (req.session.lastVisit){
        console.log(req.session);
        console.log("Show session: "+req.session.lastVisit);
    }
    req.session.lastVisit = new Date();
    
    const user = (!req.user) ? null : {
        _id:req.user.id,
        firstName:req.user.firstName,
        lastName:req.user.lastName
    }
    res.render('index',{
               title:'World',
               subtitle:'Hello Jiangxi',
               userFullName: req.user ? req.user.fullName : 'None',
               user:JSON.stringify(user)
        });
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

const passport=__webpack_require__(0);
const mongoose=__webpack_require__(1);

module.exports=()=>{
    const User=mongoose.model('User');
    passport.serializeUser((user,done)=>{
        console.log('inside passport serializeUser');
        done(null,user.id);
    });
    passport.deserializeUser((id,done)=>{
        User.findOne({_id:id},'-password -salt',(err,user)=>{
            console.log('inside passport deserializeUser');
            done(err,user);
        });
    });
    __webpack_require__(36)();
    __webpack_require__(38)();
    __webpack_require__(40)();
    __webpack_require__(42)();
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

const passport=__webpack_require__(0);
const LocalStrategy=__webpack_require__(37).Strategy;
const User=__webpack_require__(1).model('User');

module.exports=()=>{
    passport.use(new LocalStrategy((username,password,done)=>{
        User.findOne({
            username:username
        },(err,user)=>{
            if (err){
                return done(err);
            }
            if (!user){
                return done(null,false,{
                    message:'Unknown user'
                });
            }
            if(!user.authenticate(password)){
                return done(null,false,{
                    message:'Invalid password'
                });
            }
            return done(null,user);
        });
    }));
};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

const passport = __webpack_require__(0);
const url = __webpack_require__(4);
const FacebookStrategy = __webpack_require__(39).Strategy;
const config = __webpack_require__(2);
const users = __webpack_require__(3);

module.exports = function() {
  passport.use(new FacebookStrategy({
    clientID: config.facebook.clientID,
    clientSecret: config.facebook.clientSecret,
    callbackURL: config.facebook.callbackURL,
    profileFields: ['id', 'name', 'displayName', 'emails'],
    passReqToCallback: true
  }, (req, accessToken, refreshToken, profile, done) => {
    const providerData = profile._json;
    providerData.accessToken = accessToken;
    providerData.refreshToken = refreshToken;

    const providerUserProfile = {
      firstName: profile.name.givenName,
      lastName: profile.name.familyName,
      fullName: profile.displayName,
      email: profile.emails,
      username: profile.name.givenName + profile.name.familyName,
      provider: 'facebook',
      providerId: profile.id,
      providerData: providerData
    };
    
    users.saveOAuthUserProfile(req, providerUserProfile, done);
  }));
};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("passport-facebook");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

const passport = __webpack_require__(0);
const url = __webpack_require__(4);
const TwitterStrategy = __webpack_require__(41).Strategy;
const config = __webpack_require__(2);
const users = __webpack_require__(3);

module.exports = function() {
  passport.use(new TwitterStrategy({
    consumerKey: config.twitter.clientID,
    consumerSecret: config.twitter.clientSecret,
    callbackURL: config.twitter.callbackURL,
    passReqToCallback: true
  }, (req, token, tokenSecret, profile, done) => {
    const providerData = profile._json;
    providerData.token = token;
    providerData.tokenSecret = tokenSecret;

    const providerUserProfile = {
      fullName: profile.displayName,
      username: profile.username,
      provider: 'twitter',
      providerId: profile.id,
      providerData: providerData
    };

    users.saveOAuthUserProfile(req, providerUserProfile, done);
  }));
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("passport-twitter");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

const passport = __webpack_require__(0);
const url = __webpack_require__(4);
const GoogleStrategy = __webpack_require__(43).OAuth2Strategy;
const config = __webpack_require__(2);
const users = __webpack_require__(3);

module.exports = function() {
  passport.use(new GoogleStrategy({
    clientID: config.google.clientID,
    clientSecret: config.google.clientSecret,
    callbackURL: config.google.callbackURL,
    passReqToCallback: true
  }, (req, accessToken, refreshToken, profile, done) => {
    const providerData = profile._json;
    providerData.accessToken = accessToken;
    providerData.refreshToken = refreshToken;
console.log('inside google.js before users.saveOAuthUserProfile');
    const providerUserProfile = {
      firstName: profile.name.givenName,
      lastName: profile.name.familyName,
      fullName: profile.displayName,
      email: profile.emails[0].value,
      username: profile.username,
      provider: 'google',
      providerId: profile.id,
      providerData: providerData
    };
    
    users.saveOAuthUserProfile(req, providerUserProfile, done);
  }));
};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("passport-google-oauth");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map