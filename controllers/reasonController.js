const db = require("../models");

module.exports = {
    addReason: (req, res) => {
        db.Reason.create({
            reason: req.body.reason
          })
            .then(function () {
              res.status(200).end();
            })
            .catch(function (err) {
              res.status(401).json(err);
            });
    },

    getReasons: (req, res) => {
        db.Reason.findAll({
            where: {
                user_id: req.body.user_id
            }
        })
        .then(function (data) {
          res.json(data);
        })
        .catch(function (err) {
          res.status(401).json(err);
        });
    }
}