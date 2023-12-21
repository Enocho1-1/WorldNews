// Get User Current Location Weather
export const currentLocationWeather = async (obj) => {
        const { lat, lon, setCondition,setDescription,setWind,setTemp,setFeels,setFulfilled} = obj
        const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=a9426195c75a3d82140eabc394b3649e`)
        if(!response.ok){
            throw new Error(response.statusText);
        } else{
            const data = await response.json()
            setCondition(data.current.weather[0].main)
            setDescription(data.current.weather[0].description)
            setWind(data.current.wind_speed)
            setTemp(data.current.temp)
            setFeels(data.current.feels_like)
            setFulfilled(true)
        }
   
}