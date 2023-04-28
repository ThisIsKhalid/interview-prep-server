const { MongoClient, ServerApiVersion } = require("mongodb");
const { client } = require("./mongoDB");

const Users = client.db("Interview_prep").collection("users");

async function getUsersDB() {
  try {
    await client.connect();
    const query = {}
    const users = await Users.find(query).toArray();
    return users;
  } finally {
    await client.close();
  }
}
getUsersDB().catch(console.error);

async function postUserDB(data) {
  try {
    await client.connect();
    const result = await Users.insertOne(data);
    return result;
  } finally {
    await client.close();
  }
}
postUserDB().catch(console.error);

async function updateUserDB(filter, updatedDoc, options) {
  try {
    await client.connect();

    const result = await Users.updateOne(filter, updatedDoc, options);
    return result;
  } finally {
    await client.close();
  }
}
updateUserDB().catch(err => console.log(err))

module.exports = {
  postUserDB,
  getUsersDB,
  updateUserDB,
};
