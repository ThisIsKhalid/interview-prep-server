import { Users } from "../db/db.js";




export async function getAllUsersDB() {
  try {
    const users = await Users.find().toArray();
    return users;
  } catch (err) {
    console.error(err);
  }
}

export async function createUserDB(user) {
  try {
    const result = await Users.insertOne(user);
    console.log(`Created user with id: ${result.insertedId}`);
  } catch (err) {
    console.error(err);
  }
}

export async function deleteUserDB(query) {
  try {
    const result = await Users.deleteOne(query);
    return result.deletedCount;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function updateUserDB(filter, updateDoc, options) {
  const result = await Users.updateOne(filter, updateDoc, options);
  return result;
}
