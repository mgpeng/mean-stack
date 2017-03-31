process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const configureMongoose = require('./config/mongoose');  //--  mongoose should be load first
const configExpress=require('./config/express.js');
const configurePassport=require('./config/passport.js');

const db=configureMongoose();
const app=configExpress();
const passport=configurePassport();

app.listen(3000);
module.exprots = app;
console.log("Express app runing in port 3000");