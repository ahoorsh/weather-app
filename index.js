var button = document.querySelector('.button');
// var inputValue = document.querySelector('.inputValue');
var names = document.querySelector('.name');
var desc = document.querySelector('.desc');
var main = document.querySelector('.main');
var temp = document.querySelector('.temp');
var feels_like = document.querySelector('.feels_like');
var temp_min = document.querySelector('.temp_min');
var temp_max = document.querySelector('.temp_max');
var pressure = document.querySelector('.pressure');
var humidity = document.querySelector('.humidity');
var speed = document.querySelector('.speed');
var sunrise = document.querySelector('.sunrise');
var sunset = document.querySelector('.sunset');

function myFunc(){
    var cityName = document.getElementById("cityName").value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=c6f9906202c9e328ffdb877270e7454f&units=metric')
    .then(response => response.json())
    .then(data => {
        var nameVal = data['name'];
        var tempVal = data['main']['temp'];
        var descVal = data['weather'][0]['description'];
        var mainVal = data['weather'][0]['main'];
        var feelVal = data['main']['feels_like'];
        var tempMin = data['main']['temp_min'];
        var tempMax = data['main']['temp_max'];
        var pressureVal = data['main']['pressure'];
        var humidityVal = data['main']['humidity'];
        var speedVal = data['wind']['speed'];
        var sunriseVal = data['sys']['sunrise'];
        var sunsetVal = data['sys']['sunset'];


        names.innerHTML = nameVal;
        temp.innerHTML ='Temp: '+ tempVal;
        desc.innerHTML = 'Description: '+descVal;
        main.innerHTML ='Main: '+ mainVal;
        feels_like.innerHTML ='Feels_like: '+ feelVal;
        temp_min.innerHTML ='Temp_min: '+ tempMin;
        temp_max.innerHTML ='Temp_max: '+ tempMax;
        pressure.innerHTML ='Pressure: '+ pressureVal;
        humidity.innerHTML ='Humidity: '+ humidityVal;
        speed.innerHTML ='Speed: '+ speedVal;
        sunrise.innerHTML ='Sunrise: '+ sunriseVal;
        sunset.innerHTML ='Sunset: '+ sunsetVal;
    })
    .catch(err => alert("Wrong city name!"))
}
