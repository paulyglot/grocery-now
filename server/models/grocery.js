const mongoose = require('mongoose');

const grocerySchema = mongoose.Schema({
    name:{
        required: true,
        type: String,
        unique: 1,
        maxlength:50
    }
})

//
const Grocery = mongoose.model('Grocery',grocerySchema);

module.exports = { Grocery }