const services = require("../../services");
module.exports = {
  async DeleteUsers(req, res) {
    try {
      const { id } = req.params;
      const Userexist = await services.UsersServices.get.getUsersById(id);
      if (Userexist) {
        await services.UsersServices.delete.deleteUsers(id);
        res.status(200).json({ status: true, message: "user is deleted" });
      } else {
        res.status(404).json({ status: false, message: "user not exist" });
      }
    } catch (err) {
      res.status(500).json({ status: false, message: err });

      console.log(err);
    }
  },
};
