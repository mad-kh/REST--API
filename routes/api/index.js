const router = require("express").Router();
const controllers = require("../../controllers");
router.post("/createUser", controllers.UserControllers.create.CreateUsers);
router.get("/userList", controllers.UserControllers.get.GetUsers);
router.delete(
  "/deleteUser/:id",
  controllers.UserControllers.delete.DeleteUsers
);

router.put("/updateUser/:id", controllers.UserControllers.update.UpdateUser);

module.exports = router;
