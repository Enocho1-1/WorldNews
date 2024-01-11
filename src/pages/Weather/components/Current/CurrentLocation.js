import { useCurrentWeather } from "../../../../hooks";
import { CurrentWeatherInfo } from "./CurrentWeatherInfo";
import { CurrentDayInfo } from "./CurrentDayInfo";
import { GifLoader } from "../../../../components";

export const CurrentLocation = () => {

    const {fulfilled} = useCurrentWeather()
 
  return (
   <div className="mt-[4.688rem]">
        {/* Current Day,Date,Time */}
        <CurrentDayInfo/>

        {/* Weather Description */}
        { fulfilled ? (<CurrentWeatherInfo /> ) : <GifLoader height="300px" />}
     
   </div>
  )
}
