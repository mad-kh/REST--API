const User = require("../../models/User");
module.exports = {
  async updateUsers(id, userName, email, phoneNumber) {
    try {
      return await User.findByIdAndUpdate(id, { userName, email, phoneNumber });
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};
