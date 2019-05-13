const mongoose = require('mongoose');

const keys = require('../herokuKeys');

mongoose.connect(keys.mongoUrl.connect, {useNewUrlParser:true}).catch(e => {
    console.error(e.message);
  });;

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
