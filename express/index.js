const express = require('express');
const userModel = require('./routes/users')
const cookieParser = require('cookie-parser');
const session = require('express-session');
const port = 5000;

const app = express();
app.use(cookieParser())
app.use(session({
    resave: false, // session value change na hole  pore ar save kore na 
    saveUninitialized: false,
    secret: "Naim Sheikh make this web site email mdnaim01303202218@gmail.com"//encrepeted data key 
})) 
app.set("view engine", "ejs");
app.use(express.static('./public'))

app.get('/', (req, res)=>{
    res.cookie("age", 25)
    res.render('index')
})

app.get('/read', (req, res)=>{
    console.log(req.cookies.age);
    res.send(`Your age is ${req.cookies.age}`)
})

app.listen( port , ()=>{
    console.log(`i am running on ${port}`);
})

app.get("/create", async (req, res) => {
    const createdUser = await userModel.create({
        username: "Naim Sheikh",
        name: "Naim",
        age: 25
    });

    const user2 = await userModel.create({
        username: "BobVatari",
        name: "Bob",
        age: 23
    });

    const user3 = await userModel.create({
        username: "mokhles",
        name: "mokhles",
        age: 20
    });

    res.send({ createdUser, user2, user3 });
});
app.get('/allusers', async(req, res)=>{
    let allusers = await userModel.find();
    res.send(allusers)
})
app.get('/finduser', async(req, res)=>{
    let finduser = await userModel.findOne({username: "BobVatari"})
    res.send(finduser)
})

app.get('/delete', async(req, res)=>{
    let deleteuser = await userModel.findOneAndDelete({username: "BobVatari"});
    res.send(deleteuser)
})
