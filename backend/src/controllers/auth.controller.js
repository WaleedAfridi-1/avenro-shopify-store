const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/User");


const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        //required fields
        if(!name || !email || !password){
            return res.status(400).json({
                success : false,
                message : "Name, Email and Password are required."
            });
        }

        // check password length 
        if(password.trim().length < 6){
            return res.status(400).json({
                success : false,
                message : "password must be at least 6 characters."
            })
        }

        // check existing user
        const existingUser = await userModel.findOne({
            email : email.toLowerCase().trim()
        }) 

        if(existingUser){
            return res.status(409).json({
                success : false,
                message : "An account with this email already exist."
            });

        }

        // Hashed Password
        const hashedPassword = await bcrypt.hash(password, 10)
        // create user 
        const user = await userModel.create({
            name : name.trim(),
            email : email.toLowerCase().trim(),
            password : hashedPassword
        });
        // JWT token 
        const token = jwt.sign({id : user._id,email : user.email},process.env.JWT_SECRET_KEY,{expiresIn : "1d"})
        return res.status(201).json({
            success : true,
            message : "Registered successfully",
            token,
            user : {
                id : user._id,
                name : user.name,
                email : user.email
            }
        })
    } catch (error) {
        return res.status(500).json({
            success : false ,
            message : error.message
        })
    }
}


module.exports = {
    registerUser,
}