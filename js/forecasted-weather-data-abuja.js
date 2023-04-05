let city_id_forecast = 2352778;
const apiURLForecast = String(`https://api.openweathermap.org/data/2.5/forecast?id=${city_id_forecast}&units=metric&APPID=51537de831b6bf7110e51babc5e1398f`);

fetch(apiURLForecast)
  .then(response => response.json())
  .then(jsObject => {
    console.log(jsObject);

    const noon = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    console.log(noon);

    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = 0;
    noon.forEach(forecast => {
      let thedate = new Date(forecast.dt_txt);

      let imagesrc = 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';  // note the concatenation
      let desc = forecast.weather[0].description;  // note how we reference the weather array

      document.querySelector(`#dayofweek${day + 1}`).innerHTML = weekdays[thedate.getDay()];
      document.querySelector(`#forcondition${day + 1}`).src = imagesrc;
      document.querySelector(`#forcondition${day + 1}`).alt = desc;
      document.querySelector(`#fortemp${day + 1}`).innerHTML = forecast.main.temp.toFixed(0);
      day++;
    });
});