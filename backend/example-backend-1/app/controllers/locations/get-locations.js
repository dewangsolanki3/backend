const Locations = require('../../models/Hobby');
const lodash = require('lodash') ;
// const User = require('../user/get-users');
const compareFunc = (userlocations1, userlocations2) => {
  const interests1 = [];
  const interests2 = [];
  for(let key in userlocations1) {
    if(userlocations1[key]) {
      if(userlocations1.hasOwnProperty(key)) {
        interests1.push(key);
      } 
    } 
  }
  for(let key in userlocations2) {
    if(userlocations2[key]) {
      if(userlocations2.hasOwnProperty(key)) {
        interests2.push(key);
      }
    } 
  }
  const commons = lodash.intersection(interests1, interests2);
  return commons.length;
}

const controller = async (req, res) => {
  // console.log(req.query);
  const locations = await Locations.find(req.query);
  console.log(locations) ;

const count = compareFunc(locations[0].hobbyname ,locations[1].hobbyname);
// console.log(count);
if(count > 2 ){
  console.log("notification ok");
}
else{
  console.log("no notification");
}
res.send({count});
}
module.exports = controller;