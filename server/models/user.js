const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SALT_I = 10; //by default salt is 10
require('dotenv').config();

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

//before we store a user we want to hash the password
//using ES5 here bc sometimes fails with ES6=>means I need to create alias for this
userSchema.pre('save',function(next){
    var user = this;

    if(user.isModified('password')){
        bcrypt.genSalt(SALT_I,function(err,salt){
            if(err) return next(err)

            //using ES5 so using user instead of this
            bcrypt.hash(user.password,salt,function(err,hash){
                if(err) return next(err);
                user.password = hash;
                next();
            });
        })
    } else {
        next()
    }  
})

userSchema.methods.comparePassword = function(candidatePassword,cb){
    bcrypt.compare(candidatePassword,this.password,function(err,passGood){
        if(err) return cb(err);
        cb(null,passGood)
    })
}

//going to use the created token throughout entire app to check if user is able to register or enter private routes
userSchema.methods.generateToken = function(cb){
    var user = this;
    var token = jwt.sign(user._id.toHexString(),process.env.SECRET)

    user.token = token;
    user.save(function(err,user){
        if(err) return cb(err);
        cb(null,user);
    })
}

userSchema.statics.findTheToken = function(token,cb){
    var user = this;

    //if user exists we get their data  but we still get callback if nothing
    jwt.verify(token,process.env.SECRET,function(err,decode){
        user.findOne({"_id":decode,"token":token},function(err,user){
            if(err) return cb(err);
            cb(null,user);
        })
    })
}

//schema takes object so at end we export user schema so we can use on the server
const User = mongoose.model('User',userSchema);
module.exports = { User }