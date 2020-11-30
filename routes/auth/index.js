const express = require("express");
const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.post("/login", userController.login);

// Matches with "/api/user/:id"
router.post("/register", userController.register);

router.get("/user", userController.getUser);

router.get("/logout", userController.logout);

module.exports = router;
