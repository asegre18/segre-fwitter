const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const { comparePassword, fetchUserByUsernameFromDb } = require('../model/userOrm');
// Done is similar
// takes 2 parameters
// the 1st is an error or an error object
// the 2nd is the user you found or null if you dont find one
const localStrategy = new LocalStrategy(async (username, password, done) => {
//  Find a user with some given criteria
  //   if an error happened when you tried to find that user
  //   call done like this done(err, null);
  let user;
  try {
    user = await fetchUserByUsernameFromDb(username);
  } catch (e) {
    return done(e, null);
  }
  //   if you do find a user, check the users credentials
//   if the users credentials match, call done like this done(null, userWeFound);
//   What passport will do if we pass a user as the 2nd param to done
//   on the next request that the middleware applied
  if (user) {
    const doesPasswordMatch = await comparePassword(password, user.password);
    if (doesPasswordMatch) {
      return done(null, user);
    }
    return done(null, false);
  } else {
    return done(null, false);
  }
//   if no user was found call done like return done(null, false);
});

// Hey passport we have declare a strategy named 'local'
// if we tell you to authenticate using 'local'
// run the localStrategy function that we gave to you
passport.use(localStrategy);