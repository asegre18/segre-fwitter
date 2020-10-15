const { fetchUsers, fetchUserByIdFromDb, insertUserToDb } = require('../model/userOrm');

module.exports = {
  getAllUsersApi: async (_req, res) => {
    try {
      const users = await fetchUsers();
      console.log(users);
      res.json(users);
    } catch (e) {
      res.status(400)
        .json(e);
    }
  },
  insertUserApi: async (req, res) => {
    const { username, manny } = req.body;
    console.log(req.body);
    console.log(manny);
    try {
      const result = await insertUserToDb(username);
      const user = await fetchUserByIdFromDb(result.insertId);
      res.json(user);
    } catch (e) {
      res.status(400)
        .json(e);
    }
  },
};
