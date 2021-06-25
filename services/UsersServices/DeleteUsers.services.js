const User = require("../../models/User");
module.exports = {
  async deleteUsers(userName, email, phoneNumber) {
    try {
      return await User.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};
