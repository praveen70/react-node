var express = require('express');
var Student = require('../models').Student;
var router = express.Router();
//Get All Users
router.get('/', function(req, res){
    //console.log('Getting all users');
    Student.findAll().then(students => {
        res.status(200).json(students);
    });
});
//Create Student
router.post('/', function(req, res){
    Student.create({
        StudentName: req.body.StudentName,
        StudentDOB: req.body.StudentDOB,
        Class: req.body.Class,
        RollNumber: req.body.RollNumber

    }).then(student => {
       
        res.status(200).json(student);
    }).error(err => {
        res.status(405).json('Error has occured');
    });
});
module.exports = router;