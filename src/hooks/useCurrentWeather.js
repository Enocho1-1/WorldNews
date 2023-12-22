/* eslint-disable */
import { useState,useEffect } from "react";
import { currentLocationWeather } from "../utility";

export const useCurrentWeather = () => {
    const [condition,setCondition] = useState("")
    const [hourly,setHourly] = useState([])
    const [description,setDescription] = useState("")
    const [sun,setSun] = useState("")
    const [wind,setWind] = useState("")
    const [rain,setRain] = useState("")
    const [temp,setTemp] = useState("")
    const [feels,setFeels] = useState("")
    const [fulfilled,setFulfilled] = useState(false)

    const options = {
        enableHighAccuracy: true,
        timeout: 2000,
        maximumAge: 0,
      };
      
      function success(pos) {
        const crd = pos.coords;

        const weather = {
          lat : crd.latitude,
          lon : crd.longitude,
          setCondition:setCondition,
          setHourly:setHourly,
          setDescription:setDescription,
          setSun:setSun,
          setWind:setWind,
          setRain:setRain,
          setTemp:setTemp,
          setFeels:setFeels,
          setFulfilled:setFulfilled
        }
        currentLocationWeather(weather)
      }
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      
      useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, error,options);
      },[condition,description,sun,wind,rain,temp,feels,fulfilled])
  
  return {condition,hourly,description,sun,wind,rain,temp,feels,fulfilled}
}
