
const { postUserDB, getUsersDB, updateUserDB } = require("../models/usersModel");

exports.getUsers = async (req, res) => {
    const users = await getUsersDB();
    // console.log(users);
    res.send(users)
};

exports.postUser = async (req, res) => {
    const data = req.body;
    // console.log(data);
    const result = await postUserDB(data);
    // console.log(result);
    res.send(result);
};

exports.updateUser = async (req, res) => {
    const email = req.params.email
    const filter = { email: email };
    const options = { upsert: true };
    const updatedDoc = {
      $set: {
        role: "pro",
      },
    };
    
    const result = await updateUserDB(filter, updatedDoc, options)
    res.send(result)
}
