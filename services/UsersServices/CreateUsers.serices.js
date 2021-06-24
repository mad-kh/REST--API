const User = require("../../models/User");
module.exports = {
  async createUsers(userName, email, phoneNumber) {
    try {
      return await User.create({ userName, email, phoneNumber });
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};
