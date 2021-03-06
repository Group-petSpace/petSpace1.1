var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    // db.Pet.findAll({}).then(function(dbExamples) {
    //   res.render("home", {
    //     msg: "Welcome!",
    //     pets: dbExamples
    //   });
      res.render("home", {
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
    res.render("signup");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
