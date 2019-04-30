// Connexion to the server

// get Express
var express = require('express')
var app = express();
// define port to link to
var port = process.env.PORT || 3000;
mongoose = require('mongoose'),
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Tododb', { useNewUrlParser: true }); 

tasks = require('./api/models/todoListModel'), //created model loading here

bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// use both servers
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

  
var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route
 
// listen to port define above
app.listen(port);

console.log("Our server is born and listen to port : ",port);