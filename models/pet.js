module.exports = function(sequelize, DataTypes) {
    var Pet = sequelize.define("Pet", {
        name: DataTypes.STRING,
        // for now, the category of a pet should be either "Cat" or "Dog"
        category: DataTypes.STRING,
        breed: DataTypes.STRING,
        gender: DataTypes.STRING,
        // temperament is an integer between 1 and 10, representing how laid-back or high-strung an animal is
        // (temperament of 1 refers to a pet who wants to sleep all day long; temperament of 10 refers to a pet 
        // who wants to play all day long)
        temperament: DataTypes.INTEGER,
        photoURL: DataTypes.STRING,
        provider_id: DataTypes.INTEGER,
        // indicates whether a pet is available to be "checked out" on a trial or rental
        available: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    });
    return Pet;
  };
  