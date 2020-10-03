const { fetchUsers, insertUserToDb } = require('../model/userOrm');

module.exports = {
  getAllUsersApi: async (_req, res) => {
    try {
      const users = await fetchUsers();
      res.json(users);
    } catch (e) {
      res.status(400)
        .json(e);
    }
  },
  insertUserApi: async (req, res) => {
    const { username } = req.body;
    try {
      const result = await insertUserToDb(username);
      console.log('I AM THE RESULT');
      res.json(result);
    } catch (e) {
      res.status(400)
        .json(e);
    }
  },
};
