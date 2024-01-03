const express = require('express');
const userModel = require('./routes/users')
const port = 5000;

const app = express();
app.set("view engine", "ejs");
app.use(express.static('./public'))

app.get('/', (req, res)=>{
    res.render('index')
})

app.listen( port , ()=>{
    console.log(`i am running on ${port}`);
})

app.get("/create", async(req, res)=>{
   const createduser =await userModel.create({
    username: "Naim Sheikh",
    name: "Naim",
    age:25
   });
   res.send(createduser)
})