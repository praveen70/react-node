var express = require('express');
var Attendance = require('../models').Attendance;
var router = express.Router();
//Get All Attendnaces
router.get('/', function(req, res){
    //console.log('Getting all users');
    Attendance.findAll().then(attendance => {
        res.status(200).json(attendance);
    });
});
//Get All Attendnaces by Date
router.get('/:date', function(req, res){
    console.log('Getting all attendance on ' + req.params.date);
    Attendance.findAll({where:{AttendanceDate:req.params.date}}).then(attendance => {
        
        res.status(200).json(attendance);
    });
});
//Create USer
router.post('/', function(req, res){
    Attendance.create({
        StudentID: req.body.StudentID,
        AttendanceDate: req.body.AttendanceDate
    }).then(attendance => {
       
        res.status(200).json(attendance);
    }).error(err => {
        res.status(405).json('Error has occured');
    });
});
module.exports = router;