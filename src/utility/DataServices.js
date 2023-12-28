
// Weather Async & Regular Functions



// Get User Current Location Weather
export const currentLocationWeather = async (obj) => {
        const { lat, lon, setCondition,setHourly,setSun,setWind,setRain,setTemp,setFeels,setFulfilled} = obj
        const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=a9426195c75a3d82140eabc394b3649e`)
        if(!response.ok){
            throw new Error(response.statusText);
        } else{
            const data = await response.json()
            setHourly(data.hourly)
            setCondition(data.current.weather[0].main)
            setSun(data.current.sunrise)
            setWind(Math.ceil(data.current.wind_speed))
            setRain(Math.ceil(data.minutely[0].precipitation))
            setTemp(Math.ceil(data.current.temp))
            setFeels(Math.ceil(data.current.feels_like))
            setFulfilled(true)
        }
   
}

// Find User Search Location
export const userSearchLocation = async (obj) => {
    const {location,setMain,setSys,setWeather,setWind,setVisibility,setFulfilled,setResponse} = obj
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=38a098307656f7defaf84b8fc7e288bc`)
    if(!response.ok){
        setResponse(response)
    }else {
        const result = await response.json();
        setMain(result.main)
        setSys(result.sys)
        setWeather(result.weather[0])
        setWind(result.wind)
        setVisibility(result.visibility)
        setFulfilled(true)
        setResponse(response)
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

// Weather Icons 
export const weatherIcon = (condition) => {
    switch(condition){
      case 'Thunderstorm': 
        return "https://cdn-icons-png.flaticon.com/128/9755/9755210.png"
      case 'Drizzle':
        return "https://cdn-icons-png.flaticon.com/128/2059/2059322.png"
      case 'Rain':
        return "https://cdn-icons-png.flaticon.com/128/2059/2059322.png"
      case 'Snow':
        return "https://cdn-icons-png.flaticon.com/128/2315/2315309.png"
      case 'Clouds':
        return "https://cdn-icons-png.flaticon.com/128/414/414927.png"
      case 'Clear':
        return "https://cdn-icons-png.flaticon.com/128/6974/6974833.png"
      default:
        return "https://cdn-icons-png.flaticon.com/128/4005/4005817.png"
    }
  }

// News Async & Regular Functions

// Just In News
export const JustInNews = async (setData) => {
  const response = await fetch(`https://newsapi.org/v2/everything?q=general&apiKey=15ba8c0ae9064145a3aa6eebccf162fd`)
  if(!response.ok){
    throw new Error(response.message)
  } else{
    const data = await response.json()
    setData(data.articles)
  }
}


