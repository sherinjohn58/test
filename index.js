require('dotenv').config({
    path: '.env'
  });
const express = require('express');
const app = express();
const data = require('./commonstring')
const convertor = require('json-2-csv')

const PORT = process.env.PORT;

app.get("/",(req,res)=>{
    res.send("Hi "+data.userName)
})

app.get("/login",(req,res)=>{
    res.send(data.login)
})

app.listen(PORT,() =>{
    try{
        console.log("server running in PORT",PORT)
    }catch(error){
        console.log("Error")
    }
});