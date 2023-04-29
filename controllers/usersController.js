const {
  getAllUsersDB,
  createUserDB,
  deleteUserDB,
  updateUserDB,
} = require("../models/usersModel");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await getAllUsersDB();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = req.body;
    await createUserDB(user);
    res.status(201).send({ message: "User Created" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Server Error" });
  }
};

exports.deleteUser = async (req, res) => {
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

exports.updateUser = async (req, res) => {
  const email = req.params.email;
  const {role} = req.body;
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
