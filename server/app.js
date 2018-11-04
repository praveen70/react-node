var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sqlite = require('sqlite3');
var env = require('dotenv').load();
var port = process.env.PORT || 9008;
var cors = require('cors')
var app = express()
 
app.use(cors())

// models
var models = require("./models");

// routes
var users = require('./routes/usermaster');
var attendances = require('./routes/attendance');
var students = require('./routes/student');
//Sync Database
models.sequelize.sync({force:false}).then(function() {
    console.log('connected to database')
}).catch(function(err) {
    console.log(err)
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// register routes
app.use('/usermaster', users);
app.use('/attendance',attendances);
app.use('/student',students);
// index path
app.get('/', function(req, res){
    console.log('app listening on port: '+port);
    res.send('tes express nodejs sqlite')
});

app.listen(port, function(){
    console.log('app listening on port: '+port);
});

module.exports = app;