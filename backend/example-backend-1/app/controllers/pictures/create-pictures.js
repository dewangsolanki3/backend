const Picture = require('../../models/Picture');

const controller = async (req, res) => {
  console.log(req.body);
  const newPicture = await Picture.create(req.body);
  res.send(newPicture);
}

module.exports = controller;