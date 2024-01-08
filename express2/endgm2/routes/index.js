var express = require('express');
var router = express.Router();
const userModel = require('./users');
const localStrategy = require('passport-local');
const passport = require('passport');
passport.use(new localStrategy(userModel.authenticate()));



/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});
router.get('/failed', function(req, res) {
  req.flash("age", 12);
  req.flash("name","Naim Sheikh")
  res.send("done")
});
router.get('/checkit', function(req, res) {
  console.log(req.flash("age") , req.flash("name")); 
  res.send("check it in backend terminal")
});



router.get('/create', async (req, res) => {
  try {
    let userData = await userModel.create({
      username: 'Anik',
      nickname: 'Shariyar',
      description: 'I am Anik, I am 25 years old. I love Shopping; I always do some Shoping',
      categories: ['Fashion', 'Dress', 'Instgram', 'hair', 'node', 'express'],
    });
    res.status(200).send({ message: 'User created successfully', userData });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/findall', async(req, res)=>{
  let user = await userModel.find()
  res.send(user);
})

router.get('/find', async(req, res)=>{
  let regex = new RegExp("NAIM", 'i'); 
  let user = await userModel.find({username: regex})
  res.send(user);
})

router.get('/findbyarray', async(req, res)=>{
  let user = await userModel.find({categories: {$all: ['Fashion']}});
  res.send(user)
})

router.get('/profile', isLogggedIn,(req, res)=>{
  res.send('welcome to profile')
})

router.post('/register', function(req, res){
  let userdata = new userModel({
    username: String,
    secret: String
  });
  userModel.register(userdata, req.body.password)
  .then((registereduser)=>{
    passport.authenticate("local")(req, res, function(){
      res.redirect("/profile");
    })
  })
})

router.post('/login',passport.authenticate('local',{
  successRedirect:'/profile' ,
  failureRedirect:'/login'
}), function(req, res){})

router.get('/logout', function(req, res, next){
  req.logout(function(err){
    if(err) return next(err);
    res.redirect('/');
  })
})

function isLogggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/')
}

module.exports = router;
