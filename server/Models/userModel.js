const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 40,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    min: 4,
    max: 80,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    min: 6,
  },
  description: {
    type: String,
    max: 50,
    default: "",
  },
  profilePicture: {
    type: String,
    default: "YOUR_DEFAULT_AVATAR_URL",
  },
  role: {
    type: String,
    enum: ["admin", "user", "tester"],
    required: true,
    default: "user",
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },{timestamps: true},
);

module.exports = mongoose.model("User", UserSchema);
