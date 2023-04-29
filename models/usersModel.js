const { client } = require("./mongoDB");

const Users = client.db("Interview_prep").collection("users");

async function getAllUsersDB() {
  try {
    const users = await Users.find().toArray();
    return users;
  } catch (err) {
    console.error(err);
  }
}

async function createUserDB(user) {
  try {
    const result = await Users.insertOne(user);
    console.log(`Created user with id: ${result.insertedId}`);
  } catch (err) {
    console.error(err);
  }
}

async function deleteUserDB(query) {
  try {
    const result = await Users.deleteOne(query);
    return result.deletedCount;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function updateUserDB(filter, updateDoc, options) {
  const result = await Users.updateOne(filter, updateDoc, options);
  return result;
}

module.exports = { getAllUsersDB, createUserDB, deleteUserDB, updateUserDB };
