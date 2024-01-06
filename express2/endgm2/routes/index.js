var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});
router.get('/failed', function(req, res) {
  req.flash("age", 12)
});
router.get('/checkit', function(req, res) {
  let a = req.flash("age");
  console.log(a);
  res.send("check it in backend terminal")
});

module.exports = router;
