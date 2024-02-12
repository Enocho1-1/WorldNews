/* eslint-disable */
import { useState,useEffect } from "react"
import { SearchLocationDetails } from "../utility"

export interface UserSearchObj{
  coord: {lat:number,lon:number};
  weather: {description:string,icon:string,id:number,main:string}[];
  base: string;
  main: {feels_like:number,grnd_level:number,humidity:number,pressure:number,sea_level:number,temp:number,temp_max:number,temp_min:number};
  visibility: number;
  wind: {deg:number,gust:number,speed:number};
  clouds: {all:number};
  dt: number;
  sys:{country:string,sunrise:number,sunset:number};
  timezone:number;
  id:number;
  name:string;
  cod:number
}

export const useSearchLocation = (location:any) => {
    const [main,setMain] = useState<UserSearchObj | null>(null)
    const [fulfilled,setFulfilled] = useState(false)
    const [response,setResponse] = useState({})

    const locationObj = {
      location:location,
      setMain:setMain,
      setFulfilled:setFulfilled,
      setResponse:setResponse
    }
    
    useEffect(() => { 
      SearchLocationDetails(locationObj)
    },[location])

  return {main,fulfilled,response}
}
