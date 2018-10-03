require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

// Additional requirements and vaiable setup for passport *Allen
var routes = require("./routes");
var shelterOwner = require("./routes/shelterOwner");
var borrower = require("./routes/borrower");
var db = require("./models");
var http = require("http");
var passport = require("passport");
var passportConfig = require('./config/passport');

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Additional Middleware necessary for passport *Allen
app.use(express.cookieParser())
app.use(express({ secret: "ChageMePW1234"}))
app.use(passport.initialize())
app.use(passport.session())

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Additional If test relatied to passport *Allen
if ("development" === app.get("env")) {
  app.use(express.errorHandler())
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});



module.exports = app;
