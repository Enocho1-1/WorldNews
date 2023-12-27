import { useCurrentWeather } from "../../../../hooks";
import { CurrentWeatherInfo } from "./CurrentWeatherInfo";
import { CurrentDayInfo } from "./CurrentDayInfo";
import { GifLoader } from "../../../../components";

export const CurrentLocation = () => {

    const {fulfilled} = useCurrentWeather()
 
  return (
   <>
        {/* Current Day,Date,Time */}
        <CurrentDayInfo/>

        {/* Weather Description */}
        { fulfilled ? (<CurrentWeatherInfo /> ) : <GifLoader height="300px" />}
     
   </>
  )
}
