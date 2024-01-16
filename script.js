async function fetchData(city) {
  cityName.innerHTML=city;
  const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f672f110e7msh3164cf1643b938dp18793djsn6c83906dbf43',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    
    cloud_pct.innerText= result.cloud_pct

    feels_like.innerText= result.feels_like

    humidity.innerText= result.humidity

    max_temp.innerText= result.max_temp

    min_temp.innerText= result.min_temp

    sunrise.innerText= result.sunrise

    sunset.innerText= result.sunset

    temp.innerText= result.temp
    wind_degrees.innerText= result.wind_degrees

    wind_speed.innerText= result.wind_speed

    let temperature = document.querySelector(".Temperature");
    temperature.innerText = result.temp + '°C';
    let Humidity = document.querySelector(".Humidity");
    Humidity.innerText = result.humidity +  ' g.m-3';
    let WindInfo=document.querySelector(".WindInfo");
    WindInfo.innerText=result.wind_speed+" m/s";
    console.log(result);


  } catch (error) {
    console.error(error);
  }
}
submit.addEventListener("click",(e)=>{
  e.preventDefault();
  fetchData(city.value);
})
fetchData("Delhi");



