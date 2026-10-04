const express = require('express');
const AuthController = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth.middleware")

const router = express.Router();


// registration route
router.post("/register", AuthController.registerUser)

// Login Route
router.post("/login",AuthController.loginUser)

router.get("/logout",AuthController.logout);

router.get("/",authMiddleware.isUser , (req, res) => {
    res.send("You can access.")
})

module.exports = router;