const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const app = express();

require('dotenv').config();

mongoose.Promise = global.Promise;

//make sure we don't have to make changes in the future (made possible by dotenv) 
mongoose.connect(process.env.DATABASE) 

//registering middleware
app.use(bodyParser.urlencoded({extended:true})); 
app.use(bodyParser.json());
app.use(cookieParser());

//Models
const { User } = require('./models/user');
const { Grocery } = require('./models/grocery');
const { Company } = require('./models/company');
const { Product } = require('./models/product');

//Middlewares
const { auth } = require('./middleware/auth');
const { admin } = require('./middleware/admin');

////////////////PRODUCTS//////////////

app.get('/api/product/articles_by_id',(req,res)=>{
    let type = req.query.type;
    let items = req.query.id;

    if(type === "array"){
        let ids = req.query.id.split(',');
        items = [];
        items = ids.map(item=>{
            //push inside of array id of item and convert to object id
            return mongoose.Types.ObjectId(item)
        })
    }

    Product.
    find({ '_id':{$in:items}}).
    populate('company'). 
    populate('grocery').
    exec((err,docs)=>{
        //find products by single item or id and send back the docs
        return res.status(200).send(docs)
    })
})

app.post('/api/product/article',auth,admin,(req,res)=>{
    const product = new Product(req.body);

    product.save((err,doc)=>{
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success: true,
            article: doc
        })
    })
})

////////////////COMPANY///////////////

app.post('/api/product/company',auth,admin,(req,res)=>{
    const company = new Company(req.body);

    company.save((err,doc)=>{
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success: true,
            company: doc
        })
    })
})

app.get('/api/product/companies',(req,res)=>{
    Company.find({},(err,companies)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send(companies)
    })
})

////////////////GROCERY///////////////

app.post('/api/product/grocery',auth,admin,(req,res)=>{
    const grocery = new Grocery(req.body);

    grocery.save((err,doc)=>{
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success:true,
            grocery: doc
        })
    })
})

app.get('/api/product/groceries',(req,res)=>{
    Grocery.find({},(err,groceries)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send(groceries)
    })
})

////////////////USERS/////////////////
app.get('/api/users/auth',auth,(req,res)=>{
    res.status(200).json({
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        cart: req.user.cart,
        history: req.user.history
    })
})

app.post('/api/users/register', (req, res)=>{ 
    //create new user shema, grab data from body of JSON then store it
    const user = new User(req.body)
    //store into MongoDB
    user.save((err,doc)=>{
        //will not go to this if it successfully registers new user
        if(err) return res.json({success:false,err});
        //response with JSON back
        res.status(200).json({
            success: true,
            //mongoDB gives back what we stores in doc //doc.name just sends name
            userdata: doc
        })
    }) 
});

app.post('/api/users/login',(req,res)=>{

    //find the email of user (findOne gives null user or user data back)
    User.findOne({'email':req.body.email},(err,user)=>{
        if(!user) return res.json({loginSuccess:false,message:"Authorization failed, email not found"})
        //if there grab password and use password, callback is simply a callback function
        user.comparePassword(req.body.password,(err,passGood)=>{
            if(!passGood) return res.json({loginSuccess:false,message:'Wrong password'});
            //if both correct create new token
            user.generateToken((err,user)=>{
                if(err) return res.status(400).send(err);
                res.cookie('x_auth',user.token).status(200).json({
                    loginSuccess: true
                })
            })
        })
    })
})

app.get('/api/user/logout',auth,(req,res)=>{
    User.findOneAndUpdate(
        { _id:req.user._id },
        { token: '' },
        (err,doc)=>{
            if(err) return res.json({success:false,err});
            return res.status(200).send({
                success: true
            })
        }
    )
})

const PORT = process.env.PORT || 3002;
app.listen(PORT);