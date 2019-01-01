const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name:{
        required: true,
        type: String,
        unique: 1,
        maxlength: 100
    }
});

const Category = mongoose.model('Category',categorySchema);

module.exports = { Category }
