const express = require("express");
const Router = express.Router();

const newsController = require("../app/controllers/NewsControllers");

Router.get("/", newsController.show);

module.exports = Router;
