const express = require('express');


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