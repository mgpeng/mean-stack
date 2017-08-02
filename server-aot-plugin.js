process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const configureMongoose = require('./server-config/mongoose');  //--  mongoose should be load first
const configureExpress=require('./server-config/express-aot-plugin.js');
const configurePassport=require('./server-config/passport.js');

const db=configureMongoose();
const app=configureExpress(db);
const passport=configurePassport();

app.listen(3000);
module.exprots = app;
console.log("Express app runing in port 3000");