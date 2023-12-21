import { useState,useEffect } from "react";
import { currentLocationWeather } from "../../../utility";

export const CurrentLocation = () => {
    
    // const [longitude,setLongitude] = useState(null)
    // const [latitude,setLatitude] = useState(null)
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
        currentLocationWeather(crd.longitude,crd.latitude)
      }
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      
      navigator.geolocation.getCurrentPosition(success, error, options);

  return (
   <>
        <aside className="w-[100%] mt-[15px] flex justify-start">
            <h1 className="font-roboto text-4xl mx-4">{day}</h1>
            <p className="text-xl font-semibold self-center mx-4">{todayDate}</p>
            <p className="text-2xl font-semibold self-center mx-4">{formatted}</p>
        </aside>
   </>
  )
}
