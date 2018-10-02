module.exports = function(sequelize, DataTypes) {
    var Provider = sequelize.define("Provider", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: false,
            primaryKey: true
        },
        name: DataTypes.STRING,
        streetAddress: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zip: DataTypes.INTEGER,
        // for now, the category should be either "Shelter" or "Owner"
        category: DataTypes.STRING
    });
    return Provider;
  };
  