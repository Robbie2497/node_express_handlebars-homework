var express = require("express");

var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", function(req, res) {
  res.json(path.join(__dirname, "views/layouts/main"));
});

var expresshbrs = require("express-handlebars");

app.engine("handlebars", expresshbrs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgersController.js");

app.use(routes, function (err) {
  if (err) {
    console.log(err);
  }
});

app.listen(PORT, function() {
  console.log("Listening on port: ", PORT);
});
