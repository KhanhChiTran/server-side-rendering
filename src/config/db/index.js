const mongoose = require("mongoose");
require("dotenv").config();
// const Blog = require("../../app/models");
async function connect() {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("connecting...");
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connect };

// const Blogpost = new Blog();

// Blogpost.find(
//   {}.then((post) => console.log(post)).catch((err) => console.log(err))
// );
