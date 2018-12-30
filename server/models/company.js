const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    name:{
        required: false,
        type: String,
        unique: 1,
        maxlength: 50
    }
});

const Company = mongoose.model('Company',companySchema);
module.exports = { Company }