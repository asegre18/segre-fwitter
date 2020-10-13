const {
  findAllUsers,
  findUserByIdQuery,
  insertUserQuery,
} = require('./userQueries');
const connection = require('../config/connection');

// Gets
const fetchUsers = async () => {
  try {
    const [rows] = await connection.query(findAllUsers);
    return rows;
  } catch (e) {
    throw new Error(e);
  }
};

const fetchUserByIdFromDb = async (userId) => {
  try {
    const [rows] = await connection.query(findUserByIdQuery, userId);
    return rows[0];
  } catch (e) {
    throw new Error(e);
  }
};

// Insert
const insertUserToDb = async (username) => {
  try {
    const [result] = await connection.query(insertUserQuery, username);
    return result;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = {
  fetchUsers,
  fetchUserByIdFromDb,
  insertUserToDb,
};
