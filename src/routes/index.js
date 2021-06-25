const newsRouter = require("./news");

function routes(app) {
  app.get("/", (req, res) => {
    res.render("home");
  });
  app.use("/news", newsRouter);
}

module.exports = routes;
