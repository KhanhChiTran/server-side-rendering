const express = require("express");
const path = require("path");
const app = express();
const handlebars = require("express-handlebars");
const router = require("./routes");
const PORT = 3000;
const routes = require("./routes");
const db = require("./config/db");
// Connect to db
db.connect();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs"
  })
);
routes(app);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource/views"));

app.listen(PORT, () => console.log(`App listening at ${PORT}`));
