const router = require('express')
  .Router();
const { getAllUsers } = require('../../../controllers/userController');
const connection = require('../../../config/connection');
const { insertUser } = require('../../../model/userQueries');

// /api/users prepended to every Route
// Separation of concern.
// Anything that has to do with routing stays in routing
// anythign that has to do with models, stays in models
// all of the logic that happens when an endpoint/API
// goes to the controller
// Model database stuff
// View front end stuff
// Controller backend stuff that determines how urls are parsed and the logic that goes behind
// Also the controllers job to communicate between the view and the model
//   /api/users
router.route('/')
  .get(getAllUsers)
  .post(async (req, res) => {
    const userInput = req.body;
    const result = await connection.query(insertUser, userInput);
    res.json(result);
  });

module.exports = router;
