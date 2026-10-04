const mongoose = require("mongoose");
const { type } = require("node:os");


const BlacklistTokenSchema = new mongoose.Schema({
    token : {
        type : String,
        unique : true,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now(),
        expires : 7 * 24 * 60 * 60
    }
})

const BlacklistTokenModel = new mongoose.model("blacklistToken",BlacklistTokenSchema )

module.exports = BlacklistTokenModel;