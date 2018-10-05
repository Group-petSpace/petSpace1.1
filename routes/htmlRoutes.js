var db = require("../models");
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    // db.Pet.findAll({}).then(function(dbExamples) {
    //   res.render("home", {
    //     msg: "Welcome!",
    //     pets: dbExamples
    //   });
      res.render("index", {
    });
  });
  // Load example page and pass in an example by id
  app.get("/pet/:id", function(req, res) {
    db.Pet.findOne({ where: { id: req.params.id } }).then(function(dbPet) {
      res.render("pet", {
        pet: dbPet
      });
    });
  });
  app.get("/signup", function(req, res) {
    console.log("signup.handlebars loaded correctly");
    res.render("signup", {layout: "secondary.handlebars"});
  });
  app.get("/provider", function(req, res){
    console.log("provider.handlebars loaded correctly");
    res.render("provider");
  });
  app.get("/borrower", function(req, res){
    console.log("borrower.handlebars loaded correctly");
    res.render("borrower");
  });
  app.get("/home", function(req, res){
    console.log("home.handlebars loaded correctly");
    res.render("home");
  });
  app.get("/petSignup", function(req, res){
    console.log("petSignup.handlebars loaded correctly");
    res.render("petSignup");
  });
  app.get("/results", function(req, res){
    console.log("results.handlebars loaded correctly");
    res.render("results");
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};