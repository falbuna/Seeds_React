const express = require("express");
const router = require("express").Router();

const db = require("../../models");
// const postController = require("../../controllers/postController");
// const reasonController = require("../../controllers/reasonController");



router.post("/posts", (req, res) => {
    db.Post.create({
            day_quality: req.body.day_quality,
            gratitude: req.body.gratitude,
            user_id: req.body.user_id,
            reason: req.body.reason
        })
        .then(function() {
            res.status(200).end();
        })
        .catch(function(err) {
            res.status(401).json(err);
        });
});

router.get("/posts", (req, res) => {
    db.Post.findAll({
            where: {
                // user_id: req.body.user_id
            }
        })
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            res.status(401).json(err);
        });
});



// router.post("/reasons", reasonController.addPost);

// router.get("/reasons", reasonController.getPosts);


module.exports = router;