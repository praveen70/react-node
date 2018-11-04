var express = require('express');
var UserMaster = require('../models').UserMaster;
var router = express.Router();
//Get All Users
router.get('/', function(req, res){
    //console.log('Getting all users');
    UserMaster.findAll().then(users => {
        res.status(200).json(users);
    });
});
//Create USer
router.post('/', function(req, res){
    UserMaster.create({
        UserName: req.body.UserName,
        UserType: req.body.UserType,
        Password: req.body.Password

    }).then(user => {
       
        res.status(200).json(user);
    }).error(err => {
        res.status(405).json('Error has occured');
    });
});
module.exports = router;