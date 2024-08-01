// create an express routes that takes a usernamae as a route parameter and responds with 
// "hello",[usernamae]!

const express = require('express')
const app = express();

// sigle parameter
app.get('/hello/:username',(req,res)=>{
    const username = req.params.username;
    res.send(`Hello ${username}`);
});

// multiparameter

app.get('/info/:username/:age',(req,res)=>{
    const { username , age } = req.params;
    res.send(`HEllo buddy your username is ${username} and your age is ${age}`) 
})

app.listen(5000,()=>{
    console.log("i am inside your pc")
});