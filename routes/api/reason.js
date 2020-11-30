const reasonController = require("../../controllers/userController");

const express = require("express");
const router = require("express").Router();

router.post("/add", reasonController.addPost);

router.get("/get", reasonController.getPosts);

module.exports = router;