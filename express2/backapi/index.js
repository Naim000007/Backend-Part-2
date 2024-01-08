const express = require('express');
const apiData = require('./data.json')
const cors = require('cors');

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
 
app.get('/', (req, res)=>{
    res.send("hello i am live")
})

app.get("/service", (req, res)=>{
    res.send(apiData)
})


app.listen(port , ()=>{
    console.log(`server is running on port ${port}`)
})