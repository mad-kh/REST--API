const services = require("../../services");

module.exports = {
  async GetUsers(req, res) {
    try {
      const userList = await services.UsersServices.get.getUsersList();
      res
        .status(200)
        .json({ status: true, message: "User's list", data: userList });
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};
