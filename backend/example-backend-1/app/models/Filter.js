const mongoose = require('mongoose');

const FilterSchema = new mongoose.Schema({
    user : {
        type : 'ObjectId',
        ref: 'User',
        required : true ,
    },
    ageFilter : {
        type: Boolean,
        default: false ,
    },
    genderFilter : {
        type: Boolean,
        default: false ,
    }

});





const model = mongoose.model('Filter', FilterSchema);
module.exports = model;