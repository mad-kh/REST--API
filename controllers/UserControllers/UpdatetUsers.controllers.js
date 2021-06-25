const services = require("../../services");
module.exports = {
  async UpdateUser(req, res) {
    try {
      const { id } = req.params;
      const { userName, email, phoneNumber } = req.body;
      let Userexist = await services.UsersServices.get.getUsersById(id);
      if (Userexist) {
        await services.UsersServices.update.updateUsers(
          id,
          userName,
          email,
          phoneNumber
        );
        Userexist = await services.UsersServices.get.getUsersById(id);
        res.status(200).json({
          status: true,
          message: "user edited",
          data: Userexist,
        });
      } else {
        res.status(404).json({ status: false, message: "user not exist" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ status: false, message: err });
    }
  },
};
