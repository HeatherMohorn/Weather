//Setup empty JS object to act as endpoint for all routes
const projectData = [];

//Require Express to run server and routes
const express = require('express');

//Start up an instance of an app
const app = express();

/* Middleware */
//Configuring express to use body-bodyParser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

//Initialize main project folder
app.use(express.static('website'));

//Set up server
const port = 8000;
const server = app.listen(port, listening);

function listening(){
  console.log("server running on localhost: " + port);
};


//Step 2A
app.get('/getData', getData);

function getData(request, response) {
  response.send(projectData);
}

//Add POST route to add new data to projectData
//Set up post route on server side and executed on client side as async function
app.post('/addData', addData);

function addData(request, response){
  let newData = request.body;
  let newEntry = {
    temp: newData.temp,
    feeling: newData.feeling,
    date: newData.date
  }
  projectData.push(newEntry);
  console.log(projectData);
}




//app.post('/add', postFunc);

//function postFunc(request, response){
//  projectData.add(request.body);
//  console.log(projectData);
//}

//Step 2B ??????
/*
const postData = async ( url = '', data = {})=>{
    console.log(data);
    const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

    try {
      const newData = await response.json();
      console.log(newData);
      return newData
    }catch(error) {
    console.log("error", error);
    }
}*/

//Step 2B trying again
/*
app.get('/add', postData);

function postData(request, response){
  let data = request.body;
  projectData['temp'] = data.temp;
  projectData['feeling'] = data.feeling;
  projectData['date'] = data.date;
  response.send(projectData);

}

postData('/add', {temp: 80, date: "7/30/21", feeling: "happy"});

*/
