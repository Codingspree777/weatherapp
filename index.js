window.onload = function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position.coords.latitude, position.coords.longitude);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    getWeather(latitude, longitude)
  });

  const getWeather = (lat, long) =>{
    fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(weatherData) {
       makeDom(weatherData);
    });
  }
  
  
}

const makeDom = (weatherData) => {
 const city = weatherData.name;
 const country = weatherData.sys.country;
 const temp = weatherData.main.temp;
 const Ftemp = Math.round(temp * 9 / 5 + 32);
 const low = weatherData.main.temp_min;
 const Flow = Math.round(low * 9 / 5 + 32);
 const high = weatherData.main.temp_max;
 const Fhigh = Math.round(high * 9 / 5 + 32);
 const descrip = weatherData.weather[0].main;

 const title = document.createElement("h1");
 const titleName = document.createTextNode(`Current ${Ftemp} ${String.fromCharCode(176)}F`);
 title.appendChild(titleName);
 document.div1.appendChild(title);
 
 const title5 = document.createElement("h5");
 const titleName5 = document.createTextNode(`${descrip}`);
 title5.appendChild(titleName5);
 document.div1.appendChild(titleName5);

 const title2 = document.createElement("h2");
 const titleName2 = document.createTextNode(city + "," + " " + country);
 title2.appendChild(titleName2);
 document.div1.appendChild(title2);
 
 
 const title3 = document.createElement("h3");
 const titleName3 = document.createTextNode(`Low ${Flow} ${String.fromCharCode(176)}F`);
 title3.appendChild(titleName3);
 document.div1.appendChild(title3);
 
 const title4 = document.createElement("h4");
 const titleName4= document.createTextNode(`Hi ${Fhigh} ${String.fromCharCode(176)}F`);
 title4.appendChild(titleName4);
 document.div1.appendChild(title4);
 
 const div1 = document.createElement("div1");
 const divName1= document.createTextNode(`Hi ${Fhigh} ${String.fromCharCode(176)}F`);
 div1.appendChild(div1);
 document.body.appendChild(div1)
 
}


