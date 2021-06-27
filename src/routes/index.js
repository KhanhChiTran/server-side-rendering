const SiteControllers = require("../app/controllers/SiteControllers");
const newsRouter = require("./news");
const searchRouter = require("./search");

function routes(app) {
  app.get("/", SiteControllers.home);
  app.get("/search", searchRouter);
  app.get("/news", newsRouter);
}

module.exports = routes;
