const db = require("../models");


module.exports = {
    // login: (req, res, next) => {

    // },

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
      res.send(req.user);
    }
};