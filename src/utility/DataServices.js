

// Get User Current Location Weather
export const currentLocationWeather = async (obj) => {
        const {latitude,longitude,setCondition,setHourly,setSun,setWind,setTemp,setFeels,setFulfilled} = obj
 
        const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&units=imperial&appid=a9426195c75a3d82140eabc394b3649e`)
        if(!response.ok){
            throw new Error(response.statusText);
        } else{
            const data = await response.json()
            setHourly(data.hourly)
            setCondition(data.current.weather[0].main)
            setSun(data.current.sunrise)
            setWind(Math.ceil(data.current.wind_speed))
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
        return "https://cdn-icons-png.flaticon.com/128/4676/4676960.png"
      default:
        return "https://cdn-icons-png.flaticon.com/128/4005/4005817.png"
    }
  }

// News Async & Regular Functions

// Just In News
export const JustInNews = async (setData) => {
  const response = await fetch(`https://newsdata.io/api/1/news?apikey=pub_35547943f78cb2ebe00ce240baf445bbdb4b9&country=us&language=en&category=world`)
  if(!response.ok){
    throw new Error(response.message)
  } else{
    const data = await response.json()
    setData(data.results)
  }
}

// More Stories 
export const MoreStoriesFetch = async (setData,array,id) => {
  const [keywordOne,keywordTwo,keywordThree,keywordFour] = array
  const response = await fetch(`https://newsdata.io/api/1/news?apikey=pub_35547943f78cb2ebe00ce240baf445bbdb4b9&country=us&language=en&category=world`)
  if(!response.ok){
    throw new Error(response.message)
  } else{
    const data = await response.json()
    const filterData = data.results.filter(item => item.keywords !== null)
    const filteredArticles = filterData.filter(item => item.article_id !== id && item.keywords.includes(keywordOne || keywordTwo || keywordThree || keywordFour))
    setData(filteredArticles)
  }
}

// User News Search 
export const UserNewsSearch = async (query,setData) => {
  const response = await fetch(`https://newsdata.io/api/1/archive?apikey=pub_35547943f78cb2ebe00ce240baf445bbdb4b9&q=${query}&language=en`)
  if(!response.ok){
    throw new Error(response.statusText)
  } else{
    const data = await response.json()
    setData(data.results)
  }
}

// Category News
export const CategoryNews = async (api,setData) => {
  const response = await fetch(`https://newsdata.io/api/1/news?apikey=pub_35547943f78cb2ebe00ce240baf445bbdb4b9&country=us&language=en&category=${api}`)
  if(!response.ok){
    throw new Error(response.statusText)
  } else{
    const data = await response.json()
    setData(data.results)
  }
}

// Navagation to Individual Article Page
export const navigateToArticlePage = (navigate,title,article) => {
  navigate(`/News/${title}`,{state: {data:article}})
}
