const express = require("express");
const {
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
} = require("../controllers/usersController");
const router = express.Router();

router.get("/users", getAllUsers);
router.post("/users", createUser);
router.delete("/users/:email", deleteUser);
router.patch("/users/:email", updateUser);

module.exports = router;
