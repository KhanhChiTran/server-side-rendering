const express = require("express");
const Router = express.Router();

const siteController = require("../app/controllers/SiteControllers");
Router.get("/search", siteController.search);
module.exports = Router;
