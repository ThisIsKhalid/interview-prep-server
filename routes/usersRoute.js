import express from 'express'
import {
  createUser,
  deleteUser,
  getAllUsers,
  updateUser,
} from "../controllers/usersController.js";
const router = express.Router();

router.get("/users", getAllUsers);
router.post("/users/add-user", createUser);
router.delete("/users/:email", deleteUser);
router.patch("/users/:email", updateUser);

export default router
