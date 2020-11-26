var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

module.exports = function (passport) {
  // Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
  passport.use(new LocalStrategy(
    // Our user will sign in using an email, rather than a "username"
    {
      usernameField: "email"
    },
    function(email, password, done) {
      // When a user tries to sign in this code runs
      db.User.findOne({
        where: {
          email: email
        }
      })
      .then(function(dbUser) {
        // If there's no user with the given email
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect Email."
          });
        }
        // If there is a user with the given email, but the password the user gives us is incorrect
        else if (!dbUser.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect Password."
          });
        }
        // If none of the above, return the user
        return done(null, dbUser);
      })
      .catch(function (err) {
        console.log(err);
      })
    }
  ));
  

  // In order to help keep authentication state across HTTP requests,
  // Sequelize needs to serialize and deserialize the user
  // Just consider this part boilerplate needed to make it all work
  passport.serializeUser(function (user, cb) {
    cb(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    db.User.findByPk(id).then((user) => {
      const userInfo = {
        name: user.name,
        id: user.id,
        email: user.email
      }
      done(null, user);
    }).catch(done);
  });


  // passport.deserializeUser(function (id, cb) {
  //   db.User.findOne({
  //     where: {
  //       id: id
  //     }
  //   }).then(((err, user) => {
  //     const userInfo = {
  //       id: user.id,
  //       name: user.name,
  //       email: user.email
  //     }
  //     cb(err, userInfo);
  //   }))
  // });
};
