const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    user : {
        type : 'ObjectId',
        ref: 'User',
        required : true ,
    },
    feedback : {
        type : String,
        required : true ,
    }
});
const model = mongoose.model('Feedback', FeedbackSchema);
module.exports = model;