var db = require("../models");

module.exports = function(app) {
  // SIGNUP page
  // Add a user (Create a new user and store the new user in the petspacedb)
  // HTTP POST request
  app.post("/signup", function(req, res) {
      if (req.body.category === 'Shelter' || req.body.category === 'Owner') {
          db.Provider.create({
              email: req.body.email,
              password: req.body.password,
              name: req.body.name,
              streetAddress: req.body.streetAddress,
              city: req.body.city,
              state: req.body.state,
              zip: req.body.zip,
              phone: req.body.phone,
              category: req.body.category

              }).then(function(dbProvider) {
              res.json(dbProvider);
          });
      }
      else if (req.body.category === "Borrower") {
          db.Borrower.create({
              email: req.body.email,
              password: req.body.password,
              category: req.body.category,
              name: req.body.name,
              streetAddress: req.body.streetAddress,
              city: req.body.city,
              state: req.body.state,
              zip: req.body.zip,
              phone: req.body.phone

              }).then(function(dbBorrower) {
              res.json(dbBorrower);
          });
      }
    
  });

  // PROVIDER version of the site
  // Add a pet (Create a new pet and store the new pet in the petspacedb)
  // HTTP POST request
  app.post("/provider/:id/addpet", function(req, res) {
    db.Pet.create({
        name: req.body.name,
        category: req.body.category,
        breed: req.body.breed,
        gender: req.body.gender,
        age: req.body.age,
        temperament: req.body.temperament,
        photoURL: req.body.photoURL,
        provider_id: req.params.id

        }).then(function(dbPet) {
        res.json(dbPet);
    });
  });

  // PROVIDER version of the site
  // View list of all pets for the current provider
  // HTTP GET request
  app.get("/provider/:id/viewpets", function(req, res) {
    db.Pet.findAll({where: {id: req.params.id}}).then(function(dbPets) {
        res.json(dbPets);
    });
  });

  // BORROWER version of the site
  // View list of all pets in the petspacedb
  // HTTP GET request
  app.get("/borrower/viewpets", function(req, res) {
    db.Pet.findAll({}).then(function(dbPets) {
        res.json(dbPets);
    });
  });

  // BORROWER version of the site
  // View list of all cats in the petspacedb
  // HTTP GET request
  app.get("/borrower/viewpets/cats", function(req, res) {
    db.Pet.findAll({where: {category: "Cat"}}).then(function(dbPets) {
        res.json(dbPets);
    });
  });

  // BORROWER version of the site
  // View list of all dogs in the petspacedb
  // HTTP GET request
  app.get("/borrower/viewpets/dogs", function(req, res) {
    db.Pet.findAll({where: {category: "Dog"}}).then(function(dbPets) {
        res.json(dbPets);
    });
  });

  // BORROWER version of the site
  // Submit reservation to take the selected pet on a trial
  // HTTP POST request
  app.post("/borrower/:id/:pet_id/reservation", function(req, res) {
    db.Transaction.create({
        pet_id: req.params.pet_id,
        borrower_id: req.params.id
        }).then(function(dbPet) {
        res.json(dbPet);
    });
  });

  // NOT FINISHED
  // PROVIDER version of the site
  // Get list of all transactions for this provider where 
  // HTTP GET request
  // app.get("/provider/:id/transactions", function(req, res) {
  //   db.Transaction.findAll({where: {category: "Dog"}}).then(function(dbPets) {
  //       res.json(dbPets);
  //   });
  // });

  // // PROVIDER version of the site
  // // Mark the selected pet as "picked up" from the shelter or owner
  // // HTTP PUT request
  // app.put("/provider/:id/pets", function(req, res) {
  //   // Update takes in an object describing the properties we want to update, and
  //   // we use where to describe which objects we want to update
  //   db.Transaction.update({
  //     pickedUp: true
  //   }, {
  //     where: {
  //       id: req.body.id
  //     }
  //   }).then(function(dbTransaction) {
  //     res.json(dbTransaction);
  //   });
  // });





  // Create a new example
  // app.post("/api/pets", function(req, res) {
  //   // db.Example.create(req.body).then(function(dbExample) {
  //   //   //res.json(dbExample);
  //   // });
  //   // db.Pet.create(req.body).then(function(dbPet) {
  //   //   //res.json(dbPet);
  //   // });
  //   db.Pet.create({
  //       name: 'Kiwi',
  //       category: 'Cat',
  //       breed: 'Tortoiseshell',
  //       gender: 'Female',
  //       temperament: 7,
  //       available: false

  //       }).then(function(dbPet) {
  //       res.json(dbPet);
  //   });
  // });

  // Create a new example
  // app.post("/api/users", function(req, res) {
  //   db.User.create({
  //       email: 'borrower1@gmail.com',
  //       password: 'catfan',
  //       category: 'Borrower'

  //       }).then(function(dbPet) {
  //       res.json(dbPet);
  //   });
  // });

  // Create a new example
  // app.post("/api/transactions", function(req, res) {
  //   db.Transaction.create({
  //       pet_id: 1,
  //       borrower_id: 1
  //       }).then(function(dbPet) {
  //       res.json(dbPet);
  //   });
  // });

  // PUT route for updating pets. We can get the updated data from req.body
  // app.put("/api/pets", function(req, res) {
  //   // Update takes in an object describing the properties we want to update, and
  //   // we use where to describe which objects we want to update
  //   db.Pet.update({
  //     pickedUp: true
  //   }, {
  //     where: {
  //       id: req.body.id
  //     }
  //   }).then(function(dbTransaction) {
  //     res.json(dbTransaction);
  //   });
  // });

  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
