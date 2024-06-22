const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    },
    age : {
        type : Number,
        required : false,
    },
    address : {
        type : String,
        required : false,
    }
});


module.exports = mongoose.model('User', userSchema);
