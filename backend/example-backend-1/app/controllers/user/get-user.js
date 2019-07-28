const User = require('../../models/User');

const controller = async (req, res) => {
  const users = await User.findById(req.params);
  res.send(users);
  // console.log(users.userName);
}

module.exports = controller;