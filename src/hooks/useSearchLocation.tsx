/* eslint-disable */
import { useState,useEffect } from "react"
import { SearchLocationDetails } from "../utility"

interface Main{
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number
}
export const useSearchLocation = (location:any) => {
    const [main,setMain] = useState("")
    const [sys,setSys] = useState("")
    const [weather,setWeather] = useState([])
    const [wind,setWind] = useState("")
    const [visibility,setVisibility] = useState("")
    const [fulfilled,setFulfilled] = useState(false)
    const [response,setResponse] = useState({})




    const locationObj = {
      location:location,
      setMain:setMain,
      setSys:setSys,
      setWeather:setWeather,
      setWind:setWind,
      setVisibility:setVisibility,
      setFulfilled:setFulfilled,
      setResponse:setResponse
    }
    
    useEffect(() => { 
      SearchLocationDetails(locationObj)
    },[location])

  return {main,sys,weather,wind,visibility,fulfilled,response}
}
