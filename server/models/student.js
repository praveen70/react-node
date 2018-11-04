
module.exports = function(sequelize, Sequalize) {
    var StudentSchema = sequelize.define("Student", {
        StudentName: Sequalize.STRING,
        StudentDOB:Sequalize.STRING,
        Class:Sequalize.STRING,
        RollNumber:Sequalize.STRING
    },{
        timestamps: false
    });
    return StudentSchema;
}
//