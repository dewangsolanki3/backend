const Picture = require('../../models/Picture');

const controller = async (req, res) => {
  console.log(req.query);
  const pictures = await Picture.find(req.query);
  res.send(pictures);
}

module.exports = controller;