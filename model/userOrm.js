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
    // Returns an array
    // First element in the array are the rows  []
    // 2nd element is information about the db and the fields
    // rows is 1 user in an array
    // [  [ { id: 1, password: 'sasuidgayidgada', username: 'lalal' }] , { ...infoaboutDb } ]
    const [rows] = await connection.query(findUserByIdQuery, userId); //
    // and because ID's are guaranteed to be unique
    //  [ { id: 1, password: 'sasuidgayidgada', username: 'lalal' } ]
    // we know for sure that the first element is the user we found
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
