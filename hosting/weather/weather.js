const getLocation=()=>{
    navigator.geolocation.getCurrentPosition((location)=>{
       document.getElementById("cityLatitude").innerHTML=location.coords.latitude
       document.getElementById("cityLongitude").innerHTML=location.coords.longitude
    })
}
let userInput=document.getElementById("searchInput")
const getWeatherData=async(userCity)=>{
    document.getElementById("cityName").innerHTML=`
    <img src="RapidDimEider-max-1mb.gif" alt="" class="rounded-circle" style="width: 50px;">
    `
    document.getElementById("cityLatitude").innerHTML=`
    <img src="RapidDimEider-max-1mb.gif" alt="" class="rounded-circle" style="width: 50px;">
    `
    document.getElementById("cityLongitude").innerHTML=`
    <img src="RapidDimEider-max-1mb.gif" alt="" class="rounded-circle" style="width: 50px;">
    `
    document.getElementById("cityHumidity").innerHTML=`
    <img src="RapidDimEider-max-1mb.gif" alt="" class="rounded-circle" style="width: 50px;">
    `
    document.getElementById("cityPressure").innerHTML=`
    <img src="RapidDimEider-max-1mb.gif" alt="" class="rounded-circle" style="width: 50px;">
    `
    document.getElementById("cityWindDegree").innerHTML=`
    <img src="RapidDimEider-max-1mb.gif" alt="" class="rounded-circle" style="width: 50px;">
    `
    document.getElementById("cityWindSpeed").innerHTML=`
    <img src="RapidDimEider-max-1mb.gif" alt="" class="rounded-circle" style="width: 50px;">
    `
    document.getElementById("cityDescription").innerHTML=`
    <img src="RapidDimEider-max-1mb.gif" alt="" class="rounded-circle" style="width: 50px;">
    `
    document.getElementById("cityVisibility").innerHTML=`
    <img src="RapidDimEider-max-1mb.gif" alt="" class="rounded-circle" style="width: 50px;">
    `
    document.getElementById("cityPrecipitation").innerHTML=`
    <img src="RapidDimEider-max-1mb.gif" alt="" class="rounded-circle" style="width: 50px;">
    `
    document.getElementById("cityPrecipitationImage").innerHTML=`
    <img src="RapidDimEider-max-1mb.gif" alt="" class="rounded-circle" style="width: 50px;">
    `
    let url=`http://api.openweathermap.org/data/2.5/weather?q= ${userCity}&appid=b8567364034f3d3f7a6ce9ea18c14c69&units=metric`
    let response = await fetch(url)
    let convertedResponse = await response.json()
    if (response.status == 404) {
        document.getElementById("emptyInput").innerHTML="City Not Found"
        // document.getElementById("cityName").style.display="none"
        // document.getElementById("cityName").innerText="  "
        cityName.innerHTML=""
        cityLatitude.innerHTML= ""
        cityLatitude.innerHTML= ""
        cityLongitude.innerHTML= ""
        cityHumidity.innerHTML= ""
        cityPressure.innerHTML= ""
        cityWindDegree.innerHTML= ""
        cityWindSpeed.innerHTML= ""
        cityDescription.innerHTML= ""
        cityVisibility.innerHTML= ""
        cityPrecipitation.innerHTML= ""
        cityPrecipitationImage.innerHTML= ""
    }else{
        document.getElementById("emptyInput").innerHTML=""
        cityName.innerHTML=(convertedResponse.name)
    }
    console.log(convertedResponse);
    temp.innerHTML=`
    <h1 class="w-25 fixed-lg-bottom mt-5 ms-5 text-light ms-5" style="font-size: 20vh;">${Math.round(convertedResponse.main.temp_max)}<sup>o</sup>C</h1>`
    cityLatitude.innerHTML= Math.round(convertedResponse.coord.lat)
    cityLongitude.innerHTML= Math.round(convertedResponse.coord.lon)
    cityHumidity.innerHTML=(convertedResponse.main.humidity)
    cityPressure.innerHTML=(convertedResponse.main.pressure)
    cityWindDegree.innerHTML=(convertedResponse.wind.deg)
    cityWindSpeed.innerHTML=(convertedResponse.wind.speed)
    cityDescription.innerHTML=(convertedResponse.weather[0].description)
    cityVisibility.innerHTML=(convertedResponse.visibility)
    cityPrecipitation.innerHTML=(convertedResponse.weather[0].main)
    if (convertedResponse.weather[0].main=="Clouds") {
        cityPrecipitationImage.innerHTML= `<img src="cloudy.jpg" alt="" class="rounded-circle" style="width: 50px;">`
    }else if(convertedResponse.weather[0].main=="Clear"){
        cityPrecipitationImage.innerHTML= `<img src="clear.png" alt="" class="rounded-circle" style="width: 50px;">`
    } else if(convertedResponse.weather[0].main=="Rain"){
        cityPrecipitationImage.innerHTML= `<img src="rainy.png" alt="" class="rounded-circle" style="width: 50px;">`
    }else if(convertedResponse.weather[0].main=="Drizzle"){
        cityPrecipitationImage.innerHTML= `<img src="drizzle.npg" alt="" class="rounded-circle" style="width: 50px;">`
    }else if(convertedResponse.weather[0].main=="Mist"){
        cityPrecipitationImage.innerHTML= `<img src="mist.png" alt="" class="rounded-circle" style="width: 50px;">`
    }
}
searchBtn.addEventListener("click",()=>{
    if (userInput.value=="") {
        document.getElementById("emptyInput").innerHTML="Enter City of your choice"
    }else{
        document.getElementById("emptyInput").innerHTML=""
        getWeatherData(userInput.value)
    }
})