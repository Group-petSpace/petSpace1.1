module.exports = function(sequelize, DataTypes) {
    var Provider = sequelize.define("Provider", {
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        name: DataTypes.STRING,
        streetAddress: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zip: DataTypes.INTEGER,
        phone: DataTypes.STRING,
        // for now, the category should be either "Shelter" or "Owner"
        category: DataTypes.STRING
    });
    return Provider;
  };
  