const findAllUsers = 'SELECT * FROM users;';
const insertUserQuery = 'INSERT INTO users (username) VALUES (?);';

module.exports = {
  findAllUsers,
  insertUserQuery,
};
