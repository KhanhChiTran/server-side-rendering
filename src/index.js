const express = require("express");
const path = require("path");
const app = express();
const handlebars = require("express-handlebars");
const router = require("./routes");
const PORT = 3000;
app.use(express.static(path.join(__dirname, "public")));
//Template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs"
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource/views"));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(PORT, () => console.log(`App listening at ${PORT}`));
