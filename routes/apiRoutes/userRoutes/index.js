const router = require('express')
  .Router();
const connection = require('../../../config/connection');

// /api/users prepended to every Route
router.route('/')
  .get(async (_req, res) => {
    const query = 'SELECT * FROM users;';
    const [rows] = await connection.query(query);
    res.json(rows);
  })
  .post(async (req, res) => {
    const userInput = req.body;
    const query = 'INSERT INTO users SET ?;';
    const result = await connection.query(query, userInput);
    res.json(result);
  });

module.exports = router;
