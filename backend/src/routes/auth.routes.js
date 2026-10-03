const express = require('express');
const AuthController = require("../controllers/auth.controller");


const router = express.Router();


// registration route
router.post("/register", AuthController.registerUser)



module.exports = router;