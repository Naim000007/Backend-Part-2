//install mongoosejs
//require and setup connection 
// make schema 
//create model and export 

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Naim:Naim123@practice.tstsgpx.mongodb.net/?retryWrites=true&w=majority')

const userschema = mongoose.Schema({
    username: String,
    name: String,
    age:Number
})

module.exports = mongoose.model("user", userschema)