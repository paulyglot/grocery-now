const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    name:{
        required: true,
        type: String,
        unique: 1,
        maxlength:50
    },
    description:{
        required: true,
        type: String,
        maxlength:100000
    },
    price:{
        required: true,
        type: Number,
        unique: 1,
        maxlength:100
    },
    company:{
        type: Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    available:{
        required: true,
        type: Boolean,
    },
    grocery:{
        type: Schema.Types.ObjectId,
        ref: 'Grocery',
        required: true
    },
    images:{
        type: Array,
        default:[]
    }
});

const Product = mongoose.model('Product',productSchema);

module.exports = { Product }