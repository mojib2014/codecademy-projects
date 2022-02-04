const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  },
  firstName: { type: String },
  lastName: { type: String },
});

const User = mongoose.model("User", userSchema);
module.exports.User = User;
