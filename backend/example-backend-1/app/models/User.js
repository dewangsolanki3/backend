const mongoose = require('mongoose');
const arrayoflocations = [ 
  [18.9289776,72.8337317 ] , 
  [18.932149, 72.834192],
  [18.929048, 72.831527]
]
console.log(arrayoflocations);

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required:true , 
  },
  dob : { 
    type: String,
    required:true , 
  },
  age : {
    type: Number,
    required : true ,
    //if value < 18 , throw error 
  },
  gender: {
    type: String,
    required:true , 
  },
  contactNumber: {
    type: String,
    required: true,
  },
  numberOfMatches : {
    type: String,
    default : 0 ,
  },
  matchedUser : {
    type : Boolean,
    default : false ,
  },
  lat: String ,
  lng: String

});

const model = mongoose.model('User', UserSchema);
module.exports = model;