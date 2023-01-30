const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "71672cf3a0mshf3179d854009ecbp178349jsne2fda97113ef",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather=(city)=>{
    cityName.innerHTML=city
fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,options)
   .then((response) => response.json())
   .then((response) => {
    console.log(response);

    cloud_pct.innerHTML = response.cloud_pct;
    temp.innerHTML = response.temp;
    feels_like.innerHTML = response.feels_like;
    humidity.innerHTML = response.humidity;
    min_temp.innerHTML = response.min_temp;
    max_temp.innerHTML = response.max_temp;
    wind_speed.innerHTML = response.wind_speed;
    sunrise.innerHTML = response.sunrise;
    sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));
}

// const getDelhi=(city)=>{
//     cityName.innerHTML=city
// fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi",options)
//    .then((response) => response.json())
//    .then((response) => {
//     console.log(response);

//     dcloud_pct.innerHTML = response.cloud_pct;
//     dtemp.innerHTML = response.temp;
//     dfeels_like.innerHTML = response.feels_like;
//     dhumidity.innerHTML = response.humidity;
//     dmin_temp.innerHTML = response.min_temp;
//     dmax_temp.innerHTML = response.max_temp;
//     dwind_speed.innerHTML = response.wind_speed;
//     dwind_degrees.innerHTML = response.wind_degrees;
//     dsunrise.innerHTML = response.sunrise;
//     dsunset.innerHTML = response.sunset;
//   })
//   .catch((err) => console.error(err));
// }


submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
    // getDelhi("Delhi")
})
getWeather("Delhi")