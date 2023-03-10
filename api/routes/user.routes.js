const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user.controller");

router.post("/add", UserController.addUser);

router.get("/read", UserController.readUser);

router.post("/login", UserController.authUser);

module.exports = router;
