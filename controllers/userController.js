const db = require("../models");
const passport = require("passport");

module.exports = {
    login: (req, res, next) => {
      passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.send(info.message);
        else {
          req.logIn(user, (err) => {
            if (err) throw err;
            console.log(user);
            if (req.user) {
              const userInfo = {
                name: req.user.name,
                id: req.user.id,
                email: req.user.email
              }
              res.send(userInfo);
            } else {
              res.send(req.user);
            }
          });
        }
      })(req, res, next);
    },

    register: (req, res) => {
        db.User.findOne({ 
            where: {
                email: req.body.email
            }
        }).then((err, data) => {
            if (err) throw err;
            if (data) res.send("Account already exists with this email.")
            if (!data) {
                db.User.create({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                  })
                    .then(function () {
                      res.send("Account created")
                    })
            }
        });
    },
    getUser: (req, res) => {
      if (req.user) {
        const userInfo = {
          name: req.user.name,
          id: req.user.id,
          email: req.user.email
        }
        res.send(userInfo);
      } else {
        res.send(req.user);
      }
    },
    logout: (req, res) => {
      req.logout()
      res.status(200).end()
    }
};