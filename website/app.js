/* Global Variables */
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
let key = "9f2d67b95c319a699b2f533755b62b02";

//api call = base + zipcode + ',' '&appid='+key

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

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
}


postData('/add', {temperature: 80, date: "7/30/21", userResponse: "happy"});
*/

//Step 3

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
  const zip =  document.getElementById('zip').value;
  getWeather(baseURL,zip,key);
}

const getWeather = async (baseURL, zip, key)=>{

  const response = await fetch(baseURL+zip+'&appid='+key+'&units=imperial')
  try {

    const data = await response.json();
    //console.log(response.main.temp);
    console.log(data.main.temp);
    return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}
