const apiKey = "1655e70bc6b4c25f7f3d74070b0ca162";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")
const clearBtn = document.querySelector(".reset button")

async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none"; //hides weather info
    }
    else{
        var data = await response.json();
 
document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

if(data.weather[0].main == "Clear"){
    weatherIcon.src = "pictures/clear.png"

}else if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "pictures/cloudy.png"

}else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "pictures/rain.png"

}else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "pictures/drizzle.png"

}else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "pictures/fog.png"

}
else if(data.weather[0].main == "Snow"){
    weatherIcon.src = "pictures/snow.png"

}
document.querySelector(".error").style.display = "none"; 
document.querySelector(".weather").style.display = "block"; 
//display weather when click search
}
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value); 
});
clearBtn.addEventListener("click",()=>{
    document.querySelector(".weather").style.display = "none"; 
    document.querySelector(".error").style.display = "none"; 

});

//Medai Query