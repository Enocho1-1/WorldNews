/* eslint-disable */
import { useState,useEffect } from "react";
import { currentLocationWeather } from "../utility";

interface WeatherDetail{clouds:number,dew_point:number,dt:number,feels_like:number,humidity:number,pop:number,pressure:number,temp:number,uvi:number,visibility:number,weather:{id:number,main:string,description:string}[],wind_deg:number,wind_gust:number,wind_speed:number}
export interface CurrentWeatherApi{
  current: WeatherDetail;
  daily:{dt:number, sunrise:number,sunset:number}[];
  hourly:WeatherDetail[];
  lat:number;
  lon:number;
  minutely:{dt:number,precipitation:number}[];
  timezone:string;
  timezone_offset:number
}

export const useCurrentWeather = () => {
    const [main,setMain] = useState<CurrentWeatherApi | null>(null)
    // const [condition,setCondition] = useState("")
    // const [hourly,setHourly] = useState([])
    // const [sun,setSun] = useState("")
    // const [wind,setWind] = useState("")
    // const [temp,setTemp] = useState("")
    // const [feels,setFeels] = useState("")
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

        const currentWeatherObj = {
          latitude:crd.latitude,
          longitude:crd.longitude,
          setMain:setMain,
          // setCondition:setCondition,
          // setHourly:setHourly,
          // setSun:setSun,
          // setWind:setWind,
          // setTemp:setTemp,
          // setFeels:setFeels,
          setFulfilled:setFulfilled
        }
        
        currentLocationWeather(currentWeatherObj);
      }
      
      function error(err: { code: any; message: any; }) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        setDeniedAccess(true)
      }

    

      useEffect(() => {navigator.geolocation.getCurrentPosition(success, error,options)},[])
      
  return {main,fulfilled,deniedAccess}
}
