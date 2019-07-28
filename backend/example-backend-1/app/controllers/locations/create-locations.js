const Hobby = require('../../models/Hobby');

const controller = async (req, res) => {
  console.log(req.body);
  const newHobby = await Hobby.create(req.body);
  res.send(newHobby);
}

module.exports = controller;