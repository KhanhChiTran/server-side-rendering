const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Post = new Schema({
  title: { type: String, default: "New Post" },
  author: { type: String, default: "anonymous" },
  content: { type: String, minLength: 100 },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() }
});
module.exports = mongoose.model("article", Post);
