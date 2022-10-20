const express = require('express');
const todoRouters = require('./Routes/todoRouters.js');

const app =  express();

app.use(express.json())

app.use('/todo',todoRouters);

app.listen(3000,()=>{
    console.log("Server running")
})

