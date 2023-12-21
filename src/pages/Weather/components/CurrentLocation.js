import { useState,useEffect } from "react";
import { currentLocationWeather } from "../../../utility";
import { GifLoader } from "../../../components";

export const CurrentLocation = () => {
    
    const [condition,setCondition] = useState("")
    const [description,setDescription] = useState("")
    const [wind,setWind] = useState("")
    const [temp,setTemp] = useState("")
    const [feels,setFeels] = useState("")
    const [fulfilled,setFulfilled] = useState(false)

    const date = new Date()
    const dateWithoutSecond = new Date();
    const formatted = dateWithoutSecond.toLocaleTimeString([], {
      timeStyle: 'short'
    });

    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const day = weekdays[date.getUTCDay()]
    const todayDate = date.toLocaleDateString()

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
          setDescription:setDescription,
          setWind:setWind,
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
      },[])
  

  return (
   <>
        <aside className="w-[100%] mt-[15px] flex justify-start">
            <h1 className="font-roboto text-4xl mx-4">{day}</h1>
            <p className="text-xl font-semibold self-center mx-4">{todayDate}</p>
            <p className="text-2xl font-semibold self-center mx-4">{formatted}</p>
        </aside>

        {/* Weather Description */}
        { fulfilled 
          ? 
          (
            <aside className="mt-8  h-[250px] flex justify-evenly">
              <span className="flex justify-center">
                  <h1 className="text-xl text-orange-400 font-light ">{condition}</h1>
              </span>
            </aside>
          ) 
          : 
          <GifLoader height="300px" />
        }
     
   </>
  )
}
