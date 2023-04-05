let city_id = 2352778;
let apiURL = String(`https://api.openweathermap.org/data/2.5/weather?id=${city_id}&units=metric&APPID=51537de831b6bf7110e51babc5e1398f`);
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const currentCondition = document.querySelector('#current-condition');
    const currentTemp = document.querySelector('#current-temp');
    // const currentWindChill = document.querySelector('#current-wind-chill');
    const currentHumidity = document.querySelector('#current-humidity');
    const currentWindSpeed = document.querySelector('#current-wind-speed');

    currentCondition.innerHTML = jsObject.weather[0].main;
    currentTemp.innerHTML = jsObject.main.temp.toFixed(0);
    currentHumidity.innerHTML = jsObject.main.humidity;
    currentWindSpeed.innerHTML = jsObject.wind.speed.toFixed(1);

    //----------------------WIND CHILL CALCULATIONS-----------------------------
    var temp = jsObject.main.temp;
    var windSpeed = jsObject.wind.speed;
    var windChill = "N/A";
    if (temp <= 50 && windSpeed > 3) {
      windChill = 35.74 + .6215 * temp - 35.75 * Math.pow(windSpeed, .16) + .4275 * temp * Math.pow(windSpeed, .16);
    }
    var windChillElement = document.querySelector('#current-wind-chill');
    if(windChill == "N/A") {
      windChillElement.innerHTML = windChill;
    } else {
      windChillElement.innerHTML = String(Math.round(windChill));
    }

    // const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    // const desc = jsObject.weather[0].description;  // note how we reference the weather array
    // document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    // document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    // document.getElementById('icon').setAttribute('alt', desc);    
  });