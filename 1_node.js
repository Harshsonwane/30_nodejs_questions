// create an express routes that takes a usernamae as a route parameter and responds with 
// "hello",[usernamae]!

const express = require('express')
const app = express();

app.get('/hello/:username',(req,res)=>{
    const username = req.params.username;
    res.send(`Hello ${username}`);
});

app.listen(5000,()=>{
    console.log("i am inside your pc")
});