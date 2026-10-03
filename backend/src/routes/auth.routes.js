const express = require('express');
const AuthController = require("../controllers/auth.controller");


const router = express.Router();


// registration route
router.post("/register", AuthController.registerUser)

// Login Route
router.post("/login",AuthController.loginUser)



module.exports = router;