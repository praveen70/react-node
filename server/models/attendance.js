
module.exports = function(sequelize, Sequalize) {
    var AttendanceSchema = sequelize.define("Attendance", {
        StudentID: Sequalize.INTEGER,
        AttendanceDate: Sequalize.STRING
        
    },{
        timestamps: false
    });
    return AttendanceSchema;
}
//