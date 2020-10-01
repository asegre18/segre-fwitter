const router = require('express')
  .Router();
const connection = require('../../../config/connection');
const { insertUser } = require('../../../model/userQueries');
const { fetchUsers } = require('../../../model/userOrm');
// /api/users prepended to every Route
router.route('/')
  .get(async (_req, res) => {
    try {
      const users = await fetchUsers();
      res.json(users);
    } catch (e) {
      res.status(400).json(e);
    }
  })
  .post(async (req, res) => {
    const userInput = req.body;
    const result = await connection.query(insertUser, userInput);
    res.json(result);
  });

module.exports = router;
