var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

module.exports = function (passport) {
  // Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
  passport.use(
    new LocalStrategy((email, password, done) => {
      db.User.findOne({
        where: {
          email: email
        }
      }).then(function (err, dbUser) {
        if (err) throw err;
        // If there's no user with the given email
        if (!dbUser) {
          done(null, false, {
            message: "email does not exist"
          });
        }

        // If there is a user with the given email, but the password the user gives us is incorrect
        else if (!dbUser.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect password."
          });
        }
        return done(null, user);
      })
      .catch (function (err) {
        console.log(err);
      })
    }));

  // In order to help keep authentication state across HTTP requests,
  // Sequelize needs to serialize and deserialize the user
  // Just consider this part boilerplate needed to make it all work
  passport.serializeUser(function (user, cb) {
    cb(null, user.id);
  });

  passport.deserializeUser(function (id, cb) {
    db.User.findOne({
      where: {
        id: id
      }
    }).then(((err, user) => {
      const userInfo = {
        id: user.id,
        name: user.name,
        email: user.email
      }
      cb(err, userInfo);
    }))
  });
};
