const mongoose = require("mongoose");
const UserScema = mongoose.Schema({
 name:String,
 score:Number,
});
const UserModel = mongoose.model("users", UserScema);
module.exports = { UserModel};
