var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/pets", function(req, res) {
    // db.Example.findAll({}).then(function(dbExamples) {
    //   //res.json(dbExamples);
    // });
    db.Pet.findAll({}).then(function(dbPets) {
      res.json(dbPets);
    });
  });

  // Create a new example
  app.post("/api/pets", function(req, res) {
    // db.Example.create(req.body).then(function(dbExample) {
    //   //res.json(dbExample);
    // });
    // db.Pet.create(req.body).then(function(dbPet) {
    //   //res.json(dbPet);
    // });
    db.Pet.create({
        name: 'Kiwi',
        category: 'Cat',
        breed: 'Tortoiseshell',
        gender: 'Female',
        temperament: 7,
        available: false

        }).then(function(dbPet) {
        res.json(dbPet);
    });
  });

  // Create a new example
  app.post("/api/users", function(req, res) {
    db.User.create({
        email: 'borrower1@gmail.com',
        password: 'catfan',
        category: 'Borrower'

        }).then(function(dbPet) {
        res.json(dbPet);
    });
  });

  // Create a new example
  app.post("/api/transactions", function(req, res) {
    db.Transaction.create({
        pet_id: 1,
        borrower_id: 1
        }).then(function(dbPet) {
        res.json(dbPet);
    });
  });

  // PUT route for updating pets. We can get the updated data from req.body
  app.put("/api/pets", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Pet.update({
      pickedUp: true
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbTransaction) {
      res.json(dbTransaction);
    });
  });


  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
