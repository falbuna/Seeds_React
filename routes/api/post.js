const postController = require("../../controllers/userController");

const express = require("express");
const router = require("express").Router();


router.post("/add", postController.addPost);

router.get("/get", postController.getPosts);

module.exports = router;