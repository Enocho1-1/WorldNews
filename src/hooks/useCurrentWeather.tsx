/* eslint-disable */
import { useState,useEffect } from "react";
import { currentLocationWeather } from "../utility";

export const useCurrentWeather = () => {
    const [condition,setCondition] = useState("")
    const [hourly,setHourly] = useState([])
    const [sun,setSun] = useState("")
    const [wind,setWind] = useState("")
    const [temp,setTemp] = useState("")
    const [feels,setFeels] = useState("")
    const [fulfilled,setFulfilled] = useState(false)
    const [deniedAccess,setDeniedAccess] = useState(false)

    const options = {
        enableHighAccuracy: true,
        maximumAge: 0,
      };
      
      function success(pos: { coords: any; }) {
        const crd = pos.coords;
        sessionStorage.setItem("latitude",JSON.stringify(crd.latitude))
        sessionStorage.setItem("longitude",JSON.stringify(crd.longitude)) 

        const weather = {
          latitude:sessionStorage.getItem("latitude"),
          longitude:sessionStorage.getItem("longitude"),
          setCondition:setCondition,
          setHourly:setHourly,
          setSun:setSun,
          setWind:setWind,
          setTemp:setTemp,
          setFeels:setFeels,
          setFulfilled:setFulfilled
        }
        
        currentLocationWeather(weather);
      }
      
      function error(err: { code: any; message: any; }) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        setDeniedAccess(true)
      }

    

      useEffect(() => {navigator.geolocation.getCurrentPosition(success, error,options)},[condition])
      
  return {condition,hourly,sun,wind,temp,feels,fulfilled,deniedAccess}
}
