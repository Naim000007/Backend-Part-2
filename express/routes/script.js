const express = require('express');
const { model } = require('mongoose');

const app = express()

app.get("/", (req, res)=>{
    res.render();
})

app.get("/create", (req, res)=>{
   
})

module.exports = app;