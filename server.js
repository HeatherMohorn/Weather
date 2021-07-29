//Setup empty JS object to act as endpoint for all routes
projectData = {};

//Require Express to run server and routes
const express = require('express');

//Start up an instance of an app
const app = express();

/* Middleware */
//Configuring express to use body-bodyParser
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

//Initialize main project folder
app.use(express.static('website'));

//Set up server
