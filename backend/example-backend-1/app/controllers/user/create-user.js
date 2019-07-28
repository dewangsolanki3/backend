const User = require('../../models/User');

const controller = async (req, res) => {
  console.log(req.body);
  const newUser = await User.create(req.body);
  res.send(newUser);
}

module.exports = controller;