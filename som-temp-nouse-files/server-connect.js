const connect=require('connect');
const app=connect();

logger=(req,res,next)=>{
  console.log('req method:'+req.method);
  console.log('req url:'+req.url);
  next();
}
helloWorld=(req,res)=>{
  res.setHeader('Content-Type','text/plain');
  res.end('Hello World !!!!');
};
goodBye=(req,res)=>{
  res.setHeader('Content-Type','text/plain');
  res.end('GOOD BYE');
};
app.use(logger);
app.use('/hello',helloWorld);
app.use('/goodbye',goodBye);
app.listen('3000');
console.log("Listen port 3000");