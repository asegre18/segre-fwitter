const router = require('express')
  .Router();
const jwt = require('jsonwebtoken');
// /auth prepended to everything
const signInMiddleware = require('../../middlewares/signInMiddleware');
// /auth/signin

const tokenForUser = (id) => {
  return jwt.sign({
    sub: id,
    iat: new Date().getTime()
  }, process.env.JWT_SECRET);
};

router.post('/signin', signInMiddleware, (req, res) => {
  console.log('I AM THE LOGGED IN USER', req.user);
  res.json(tokenForUser(req.user.id));
});

module.exports = router;
