const findAllUsers = 'SELECT * FROM users;';
const findUserByIdQuery = 'SELECT * FROM users WHERE id = ?;';
const insertUserQuery = 'INSERT INTO users (username, password) VALUES (?, ?);';

module.exports = {
  findAllUsers,
  findUserByIdQuery,
  insertUserQuery,
};
