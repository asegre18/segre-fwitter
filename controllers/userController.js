const {
  fetchUsers,
  fetchUserByIdFromDb,
  insertUserToDb,
  deleteUserByIdFromDb,
} = require('../model/userOrm');

module.exports = {
  getAllUsersApi: async (_req, res) => {
    try {
      const users = await fetchUsers();
      res.json(users);
    } catch (e) {
      console.log(e);
      res.status(400)
        .json(e);
    }
  },
  insertUserApi: async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    try {
      const user = await insertUserToDb(username, password);
      res.json(user);
    } catch (e) {
      console.log(e);
      res.status(400)
        .json(e);
    }
  },
  getUserByIdApi: async (req, res) => {
    const { userId } = req.params;
    try {
      res.json(await fetchUserByIdFromDb(userId));
    } catch (e) {
      console.log('i am broken L:38', e);
      res.status(400)
        .json(e);
    }
  },
  deleteUserByIdApi: async (req, res) => {
    const { userId } = req.params;
    try {
      const deletedUser = await deleteUserByIdFromDb(userId);
      res.json(deletedUser);
    } catch (e) {
      console.log('i am broken L:48', e);
      res.status(400)
        .json(e);
    }
  },
};
