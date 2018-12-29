const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

require('dotenv').config();

mongoose.Promise = global.Promise;

//make sure we don't have to make changes in the future (made possible by dotenv) 
mongoose.connect(process.env.DATABASE) 

//registering middleware
app.use(bodyParser.urlencoded({extended:true})); 
app.use(bodyParser.json());

//Models
const { User } = require('./models/user');

////////////////USERS/////////////////
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
})

const PORT = process.env.PORT || 3002;
app.listen(PORT);