const User = require("../../models/User");
module.exports = {
  async getteUsersByEmail(email) {
    try {
      return await User.find({ email });
    } catch (err) {
      console.log(err);
      return err;
    }
  },

  async getteUsersByphoneNumber(phoneNumber) {
    try {
      return await User.find({ phoneNumber });
    } catch (err) {
      console.log(err);
      return err;
    }
  },

  async getUsersList() {
    try {
      return await User.find();
    } catch (err) {
      console.log(err);
      return err;
    }
  },
  async getUsersById(id) {
    try {
      return await User.findById(id);
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};
