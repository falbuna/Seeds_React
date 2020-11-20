const router = require("express").Router();
const userRoutes = require("./user");
// const postRoutes = require("./post");
// const reasonRoutes = require("./reason");

// Book routes
router.use("/user", userRoutes);
// router.use("/post", postRoutes);
// router.use("/reason", reasonRoutes);

module.exports = router;