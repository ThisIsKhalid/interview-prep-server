import {
  createUserDB,
  deleteUserDB,
  getAllUsersDB,
  updateUserDB,
} from "../models/usersModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await getAllUsersDB();
    res.status(200).json({
      message: "Successfull",
      data: users,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const user = req.body;
    await createUserDB(user);
    res.status(201).send({ message: "User Created" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Server Error" });
  }
};

export const deleteUser = async (req, res) => {
  const email = req.params.email;
  const query = { email: email };
  const result = await deleteUserDB(query);
  if (result === null) {
    res.status(500).send("Server error occurred while deleting user");
  } else if (result === 0) {
    res.status(404).send("User not found");
  } else {
    res.status(200).send(`Deleted ${result} user(s)`);
  }
};

export const updateUser = async (req, res) => {
  const email = req.params.email;
  const { role } = req.body;
  // console.log(email, role);
  const filter = { email: email };
  const options = { upsert: true };
  const updateDoc = {
    $set: {
      role: role,
    },
  };
  try {
    const result = await updateUserDB(filter, updateDoc, options);
    res.send({ message: "User role updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};
