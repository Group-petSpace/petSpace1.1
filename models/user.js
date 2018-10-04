module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        email:  {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
          },
        password: {
            type: DataTypes.STRING
        },
        salt: {
            type: DataTypes.STRING
        },
        // for now, the category of a user should be either "Provider" or "Borrower"
        category: DataTypes.STRING
    });
    return User;
  };
  