module.exports = function(sequelize, DataTypes) {
    var Transaction = sequelize.define("Transaction", {
        pet_id: DataTypes.INTEGER,
        borrower_id: DataTypes.INTEGER,
        // the default value of "pickedUp" is false--it will be changed to true when the pet 
        // with the given ID is picked up by the borrower with the given ID
        pickedUp: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        // the default value of "droppedOff" is false--it will be changed to true when the pet 
        // with the given ID is returned by the borrower with the given ID
        droppedOff: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        // the time when a borrower placed a reservation for a pet
        reservationTime: DataTypes.DATE,
        // the time when a borrower picks up a pet, i.e. from a shelter, for a trial
        startTime: DataTypes.DATE,
        // the time when a borrower returned a pet from a trial or rental
        endTime: DataTypes.DATE
    });
    return Transaction;
  };
  