const express=require('express');
const app=express();

app.use('/',(req,res)=>{
    res.status(200).send('Hello Earth');
});
app.listen(3000);
console.log('Server running 3000');

module.exports=app;