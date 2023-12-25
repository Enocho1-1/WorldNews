// Get User Current Location Weather
export const currentLocationWeather = async (obj) => {
        const { lat, lon, setCondition,setHourly,setDescription,setSun,setWind,setRain,setTemp,setFeels,setFulfilled} = obj
        const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=a9426195c75a3d82140eabc394b3649e`)
        if(!response.ok){
            throw new Error(response.statusText);
        } else{
            const data = await response.json()
            setHourly(data.hourly)
            setCondition(data.current.weather[0].main)
            setDescription(data.current.weather[0].description)
            setSun(data.current.sunrise)
            setWind(Math.ceil(data.current.wind_speed))
            setRain(Math.ceil(data.minutely[0].precipitation))
            setTemp(Math.ceil(data.current.temp))
            setFeels(Math.ceil(data.current.feels_like))
            setFulfilled(true)
        }
   
}

// Find User Search Location
export const userSearchLocation = async (location,setData) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=38a098307656f7defaf84b8fc7e288bc`)
    if(!response.ok){
        return alert('City not found!')
    }else {
        const result = await response.json();
        setData(result)
    }
}
// Unix Time Convertor
export const unixTimeConvertor = (time) => {
    const date = new Date(time * 1000)
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return formattedTime
}


