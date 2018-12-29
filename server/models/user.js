const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required: true,
        trim: true, //don't want white spaces for storing
        unique: 1 //keep the emails unique
    },
    password:{
        type: String,
        required: true,
        minlength: 5,
    },
    name:{
        type:String,
        required: true,
        maxlength:50
    },
    lastname:{
        type:String,
        required: true,
        maxlength:50
    },
    item:{
        type:Array,
        default: []
    },
    history:{    //show what they purchased before
        type:Array,
        default: []
    },
    role:{
        type:Number,
        default:0
    },
    token:{
        type:String
    }
})

//schema takes object so at end we export user schema so we can use on the server
const User = mongoose.model('User',userSchema);
module.exports = { User }