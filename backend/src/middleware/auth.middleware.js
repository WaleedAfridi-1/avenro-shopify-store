const jwt = require("jsonwebtoken");
const userModel = require("../models/User");
const blacklistTokenModel = require("../models/BlacklistToken");

const isUser = async (req, res, next) => {

    try {
        const token = req.cookies?.token;
        
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized access, please login"
            })
        }

        // Token Blacklist 
        const isBlacklisted = await blacklistTokenModel.findOne({token});
        if(isBlacklisted){
            return res.status(401).json({
                success : false,
                message : "Token is expired or invalid, please login again."
            })
        }
        // decoding 
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        const user = await userModel.findOne({ _id: decoded.id })
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found, please login again"
            })
        }
        req.user = user;
        next();
    } catch (error) {
        console.log(error.message)
        return res.status(401).json({
            success: false,
            message: `Invalid or expire token: ${error.message} `
        })
    }
}

module.exports = {
    isUser
}