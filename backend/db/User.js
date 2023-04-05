const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    price:Number
});

module.exports = mongoose.model("collects",userSchema);