// Get User Current Location Weather
export const currentLocationWeather = async (lon,lat,setCurrent) => {
   
        const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=a9426195c75a3d82140eabc394b3649e`)
        if(!response.ok){
            throw new Error(response.statusText);
        } else{
            const data = await response.json()
            setCurrent(data)
        }
   
}