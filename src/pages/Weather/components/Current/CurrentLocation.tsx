import { useCurrentWeather } from "../../../../hooks";
import { CurrentWeatherInfo } from "./CurrentWeatherInfo";
import { CurrentDayInfo } from "./CurrentDayInfo";
import { DeniedAccess } from "../Denied/DeniedAccess";


export const CurrentLocation = () => {

    const {fulfilled,deniedAccess} = useCurrentWeather()
 
  return (
   <div className="mt-[4.688rem]">
        {/* Current Day,Date,Time */}
        <CurrentDayInfo/>

        {/* Weather Description */}
        { fulfilled && <CurrentWeatherInfo />}

        {/* User Denies Geo Location Prompt */}
        {deniedAccess && <DeniedAccess/>}
     
   </div>
  )
}
