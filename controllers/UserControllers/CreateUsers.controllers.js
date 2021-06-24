const services = require("../../services");
module.exports = {
  async CreateUsers(req, res) {
    try {
      const { userName, email, phoneNumber } = req.body;
      if (phoneNumber.toString().length !== 8) {
        res
          .status(406)
          .json({ status: false, message: "phoneNumber length must be 8" });
      }
      if (!email.includes("@")) {
        res
          .status(406)
          .json({ status: false, message: "email must includes @" });
      }
      const newUser = await services.UsersServices.create.createUsers(
        userName,
        email,
        phoneNumber
      );
      res
        .status(201)
        .json({ status: true, message: "new user", data: newUser });
    } catch (err) {
      res.status(500).json({ status: false, message: err });

      console.log(err);
    }
  },
};
