const router = require("express").Router();
const controllers = require("../../controllers");
router.post("/createUser ", controllers.UserControllers.create.CreateUsers);

module.exports = router;
