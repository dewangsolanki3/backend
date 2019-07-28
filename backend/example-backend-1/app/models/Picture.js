const mongoose = require('mongoose');

const PicturesSchema = new mongoose.Schema({
    user : {
        type : 'ObjectId',
        ref: 'User',
        required : true ,
    },
    //AlbumId : String ,
    pictureLink : String 
});
const model = mongoose.model('Pictures', PicturesSchema);
module.exports = model;