module.exports = function(sequelize, DataTypes) {
    var Borrower = sequelize.define("Borrower", {
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        name: DataTypes.STRING,
        streetAddress: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zip: DataTypes.INTEGER,
        phone: DataTypes.STRING
    });
    return Borrower;
  };
  