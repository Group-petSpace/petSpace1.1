module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        // for now, the category of a user should be either "Provider" or "Borrower"
        category: DataTypes.STRING
    });
    return User;
  };
  