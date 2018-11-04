
module.exports = function(sequelize, Sequalize) {
    var UserMasterSchema = sequelize.define("UserMaster", {
        UserName: Sequalize.STRING,
        UserType: Sequalize.STRING,
        Password: Sequalize.STRING
    },{
        timestamps: false
    });
    return UserMasterSchema;
}
//