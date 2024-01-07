/* eslint-disable */
import { useState,useEffect } from "react";
import { currentLocationWeather } from "../utility";

export const useCurrentWeather = () => {
    const [condition,setCondition] = useState("")
    const [hourly,setHourly] = useState([])
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
        sessionStorage.setItem("latitude",JSON.stringify(crd.latitude))
        sessionStorage.setItem("longitude",JSON.stringify(crd.longitude))   
      }
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }

      const weather = {
        setCondition:setCondition,
        setHourly:setHourly,
        setSun:setSun,
        setWind:setWind,
        setRain:setRain,
        setTemp:setTemp,
        setFeels:setFeels,
        setFulfilled:setFulfilled
      }

      useEffect(() => {navigator.geolocation.getCurrentPosition(success, error,options)},[])
      
      useEffect(() => {
        currentLocationWeather(weather);
      },[condition])
  
  return {condition,hourly,sun,wind,rain,temp,feels,fulfilled}
}
