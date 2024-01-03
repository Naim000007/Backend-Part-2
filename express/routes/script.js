const express = require('express');
const userModel = require('./users')

const app = express()

app.get("/", (req, res)=>{
    res.render();
})

app.get("/create", async(req, res)=>{
   const createduser =await userModel.create({
    username: "Naim Sheikh",
    name: "Naim",
    age:25
   });
   res.send(createduser)
})

module.exports = app;