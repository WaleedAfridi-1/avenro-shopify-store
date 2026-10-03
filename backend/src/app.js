const cors = require('cors');
const helmet = require('helmet');
const morgan = require("morgan");
const express = require("express");
const authRouter = require('../src/routes/auth.routes');
const app = express();


// Security
app.use(helmet());
// Cors
app.use(
    cors({
        origin: "http://localhost:3000", 
        credentials: true
    })
);
// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Logger
app.use(morgan("dev"));



// Routing setup 
app.use('/api/auth', authRouter)



// Health Check
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Avenro Api Is Running"
    });
})


module.exports =  app;