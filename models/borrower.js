module.exports = function(sequelize, DataTypes) {
    var Borrower = sequelize.define("Borrower", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: false,
            primaryKey: true
        },
        name: DataTypes.STRING,
        streetAddress: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zip: DataTypes.INTEGER
    });
    return Borrower;
  };
  