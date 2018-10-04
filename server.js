require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");

// Additional requirements and vaiable setup for passport *Allen
var flash = require("connect-flash");
var session = require("express-session");
var cookieParser = require("cookie-parser");
var setupPassport = require("./config/passport.js")

var app = express();
var PORT = process.env.PORT || 3000;

// Requiring our models for syncing
var db = require("./models");

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(bodyParser.text());

// Additional express middleware for passport *Allen
// app.use(cookieParser());
// app.use(session({secret:"", resave: false, saveUninitialized: false}));

// Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"}));
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
