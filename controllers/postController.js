const db = require("../models");

module.exports = {
    addPost: (req, res) => {
        db.Post.create({
            day_quality: req.body.day_quality,
            gratitude: req.body.gratitude,
            user_id: req.body.user_id,
            reason: req.body.reason
        })
            .then(function () {
                res.status(200).end();
            })
            .catch(function (err) {
                res.status(401).json(err);
            });
    },

    getPosts: (req, res) => {
        db.Post.findAll({
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