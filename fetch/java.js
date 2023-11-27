const searchbox = document.querySelector('.search input')
const btnbox = document.querySelector('.search button')
const weatherIcon =document.querySelector('.weather-icon')

const apikey = 'b213a2146c49ba6e54be0bfc6a38e81d';
const apiurl='https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

async function checkWeather(city){
    const response = await fetch(apiurl+ city + `&appid=${apikey}`);
    if(response.status == 404){
document.querySelector('.error').style.display='block'
document.querySelector('.weather').style.display='none'
    }else {
        var data = await response.json();
// console.log(data)
document.querySelector('.city').innerHTML=data.name
document.querySelector('.temp').innerHTML=Math.round(data.main.temp) + '&degc'
document.querySelector('.humidity').innerHTML=data.main.humidity + '%'
document.querySelector('.wind').innerHTML=data.wind.speed + 'km/h'
document.querySelector('.weather').style.display='block'
document.querySelector('.error').style.display='none'


if(data.weather[0].main == 'Clear'){
    weatherIcon.src = './images/clear.png'
}
if(data.weather[0].main == 'Clouds'){
    weatherIcon.src = './images/clouds.png'
}
if(data.weather[0].main == 'Rain'){
    weatherIcon.src = './images/rain.png'
}
if(data.weather[0].main == 'Mist'){
    weatherIcon.src = './images/mist.png'
}
if(data.weather[0].main == 'Snow'){
    weatherIcon.src = './images/snow.png'
}
    }

}
btnbox.addEventListener('click',()=>{
    checkWeather(searchbox.value);

})



class WeatherApp {
  constructor() {
    this.searchBox = document.querySelector('.search input');
    this.btnBox = document.querySelector('.search button');
    this.weatherIcon = document.querySelector('.weather-icon');
    //   api key for our application 
    this.apiKey = 'b213a2146c49ba6e54be0bfc6a38e81d';
    //   api url with parameter q for city without argument 
    this.apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
    //   add event on search icon and pass the value from input 
    this.btnBox.addEventListener('click', () => {
      this.checkWeather(this.searchBox.value);
    });
  }
  //make async function called checkWeather with parameter that get the value from input
  async checkWeather(city) {
    // add the value of apiUrl and city and this.apiKey
    const response = await fetch(this.apiUrl + city + `&appid=${this.apiKey}`);
    //   error message if i write the name of city wrong or i do not have this city in input
    if (response.status == 404) {
      document.querySelector('.error').style.display = 'block';
      document.querySelector('.weather').style.display = 'none';
      // this for if i do not have error message 
    } else {
      const data = await response.json();
      document.querySelector('.city').innerHTML = data.name;
      document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '&degc';
      document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
      document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';
      document.querySelector('.weather').style.display = 'block';
      document.querySelector('.error').style.display = 'none';

      // this for change img belonging the weather 
      if (data.weather[0].main == 'Clear') {
        this.weatherIcon.src = './images/clear.png';
      }
      if (data.weather[0].main == 'Clouds') {
        this.weatherIcon.src = './images/clouds.png';
      }
      if (data.weather[0].main == 'Rain') {
        this.weatherIcon.src = './images/rain.png';
      }
      if (data.weather[0].main == 'Mist') {
        this.weatherIcon.src = './images/mist.png';
      }
      if (data.weather[0].main == 'Snow') {
        this.weatherIcon.src = './images/snow.png';
      }
    }
  }
}

const weatherApp = new WeatherApp();
