const User = require('../../models/User');

const controller = async (req, res) => {
  console.log(req.query);
  const users = await User.find(req.query);
  res.send(users);
  //console.log(users);
  let array1 = [];
   for (let i = 0 ; i < 4; i++ ){
    array1.push({ 
      userId :  users[i]._id ,
      userNoOfMatches : users[i].numberOfMatches ,
      userMatchedUser : users[i].matchedUser ,
    });
  };
  console.log(array1);

    
}
module.exports = controller;