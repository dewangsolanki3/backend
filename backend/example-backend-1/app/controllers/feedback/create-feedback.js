const Feedback = require('../../models/Feedback');

const controller = async (req, res) => {
  console.log(req.body);
  const newFeedback = await Feedback.create(req.body);
  res.send(newFeedback);
}

module.exports = controller;