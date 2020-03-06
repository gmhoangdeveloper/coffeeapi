const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cros = require('cors')
require('dotenv/config');

app.use(cros())
app.use(bodyParser.json());
// //Middlewares
// app.use('/post',()=>{
//     console.log('This is middewares running')
// })
//Import Router 
const postsRoute = require('./routes/posts');
app.use('/posts',postsRoute);


//ROUTES
app.get('/',(req,res)=>{
    res.send('We are on home'); 
})
app.get('/posts',(req,res)=>{
    res.send('We are on post'); 
})
//Connect TO DB
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true , useCreateIndex:true},()=>console.log('conected to DB'));

//How to we start lsitening to the server
app.listen(3000);