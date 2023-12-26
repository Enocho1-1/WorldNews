/* eslint-disable */
import { useState,useEffect } from "react"
import { userSearchLocation } from "../utility"

export const useSearchLocation = (location) => {
    const [main,setMain] = useState("")
    const [sys,setSys] = useState("")
    const [weather,setWeather] = useState([])
    const [wind,setWind] = useState("")
    const [fulfilled,setFulfilled] = useState(false)

    const locationObj = {
      location:location,
      setMain:setMain,
      setSys:setSys,
      setWeather:setWeather,
      setWind:setWind,
      setFulfilled:setFulfilled
    }
    
    useEffect(() => { 
        userSearchLocation(locationObj)
    },[location])

  return {main,sys,weather,wind,fulfilled}
}
