const Feedback = require('../../models/Feedback');

const controller = async (req, res) => {
  console.log(req.query);
  const feedbacks = await Feedback.find(req.query);
  res.send(feedbacks);
}

module.exports = controller;