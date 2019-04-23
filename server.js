// Connexion to the server

// get Express
var express = require('express')
var app = express();
// define port to link to
var port = process.env.PORT || 3000;
mongoose = require('mongoose'),
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27018/Tododb', { useNewUrlParser: true }); 

tasks = require('./api/models/todoListModel'), //created model loading here

bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

// listen to port define above
app.listen(port);

console.log("Our server is born and listen to port : ",port);