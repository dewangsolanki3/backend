const Filter = require('../../models/Filter');

const controller = async (req, res) => {
  console.log(req.body);
  const newFilter = await Filter.create(req.body);
  res.send(newFilter);
}

module.exports = controller;  