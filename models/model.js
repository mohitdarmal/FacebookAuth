const mongoose = require('mongoose');

const keys = require('../herokuKeys');

mongoose.connect('mongodb+srv://FacebookAuth:Mohit@321@facebookauth-cbvgc.mongodb.net/test?retryWrites=true', {useNewUrlParser:true});

const userSchema = new mongoose.Schema({
    facebookID : String,
    username : String,
    email : String,
    profilePic : String,
    dateOfBirth : String,
    gender : String,
    homeTown : String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
