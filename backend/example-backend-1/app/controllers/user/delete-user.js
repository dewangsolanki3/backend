const User = require('../../models/User');
const controller = async (req, res) => {
    const users = await User.deleteOne({name : req.params.name});
    const print = {
        user : users ,
        sucessful : true
    }
    res.send(print);
}
module.exports = controller;