const services = require("../../services");

module.exports = {
  async GetUsers(req, res) {
    try {
      const userList = await services.contactServices.get.GetUsers;
      res
        .status(200)
        .json({ status: true, message: "contact list", data: contactList });
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};
