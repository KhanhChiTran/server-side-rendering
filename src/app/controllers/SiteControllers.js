const Post = require("../models/Posts");

class SiteController {
  home(req, res, next) {
    Post.find({})
      .then((posts) =>
        // posts.map((post) => post.toObject());
        res.render("home")
      )
      .catch(next);

    // res.render("home");
  }
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
