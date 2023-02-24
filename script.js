var apikey = "";
var city = document.getElementById('city');
var btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    if(city.value.length>1) search(city.value);
})

city.addEventListener('keyup',(event)=>{
    if (event.key == 'Enter' && city.value.length>1) search(city.value);
})

function search(city){
    var apicall=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`

    fetch(apicall)
    .then( res=> res.json() )
    .then( data=>{
        
    var ele = document.getElementById('content');
    ele.innerHTML=`<p id="r1">Weather in ${city}</p>
    <p id="r2">${data.main.temp}° C</p>
    <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="not found" id="icon">
    <p id="r3">Humidity:- ${data.main.humidity}%</p>
    <p>Wind Speed:- ${data.wind.speed} m/s`;

    ele.style.display="block";
    })
    .catch( err=> console.log(err) )
}
