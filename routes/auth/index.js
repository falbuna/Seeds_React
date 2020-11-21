const express = require("express");
const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("passport");

// Matches with "/api/user"
router.post("/login",
        
        passport.authenticate("local", (err, user, info) => {
            if (err) throw err;
          }), function(req, res, next) {
              console.log("success!");
              res.end();
          });

// Matches with "/api/user/:id"
router.route("/register")
    .post(userController.register);

router.route("/user")
    .get(userController.getUser);



module.exports = router;
