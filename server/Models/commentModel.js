const mongoose = require("mongoose");
const CommentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    description: { type: String, max: 1500 },
    noOfLike: { type: Number, max: 99999 },
    picURL: { type: String, max: 300 },
    date: { type: Date },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Comment", CommentSchema);
