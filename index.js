const express = require('express')
var app = express()

//Route
app.get('/',function(req,res){
  res.send('hello world')
})

//MongoDB connection
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
mongoose.connection.once('open',function(){
  console.log('Database connected Successfully');
}).on('error',function(err){
  console.log('Error', err);
})


//Server
app.listen(8000,function(){
  console.log('Server is Up at: http://localhost:8000')
})

const router = require('./routes/emp')
app.use('/emp',router)                    