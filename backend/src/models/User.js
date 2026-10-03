const mongoose = require('mongoose');
const { type } = require('node:os');


const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true,
        minlength : 3,
        maxlength : 50
    },
    email : {
        type : String,
        required :true,
        unique : true,
        lowercase : true,
        trim : true
    },
    password : {
        type : String,
        required : true,
        minlength : 6,
    },
    role : {
        type : String,
        enum : ["customer", "admin"],
        default : 'customer'
    }
},
    {timestamps : true}
)


const userModel = new mongoose.model("user",userSchema);
module.exports = userModel;