const router = require('express').Router();
const { getAllUsers } = require('../../../controllers/userController');
const connection = require('../../../config/connection');
const { insertUser } = require('../../../model/userQueries');

// /api/users prepended to every Route
router.route('/')
  .get(getAllUsers)
  .post(async (req, res) => {
    const userInput = req.body;
    const result = await connection.query(insertUser, userInput);
    res.json(result);
  });

module.exports = router;
