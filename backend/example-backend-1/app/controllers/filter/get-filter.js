const Filter = require('../../models/Filter');

const controller = async (req, res) => {
  console.log(req.query);
  const filters = await Filter.find(req.query);
  res.send(filters);
}

module.exports = controller;