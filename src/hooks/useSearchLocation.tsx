/* eslint-disable */
import { useState,useEffect } from "react"
import { userSearchLocation } from "../utility"

export const useSearchLocation = (location) => {
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
        userSearchLocation(locationObj)
    },[location])

  return {main,sys,weather,wind,visibility,fulfilled,response}
}
