import { useCurrentWeather } from "../../../hooks";
import { CurrentWeatherInfo } from "./CurrentWeatherInfo";
import { GifLoader } from "../../../components";

export const CurrentLocation = () => {
    
 
    const {fulfilled} = useCurrentWeather()

    const date = new Date()
    const dateWithoutSecond = new Date();
    const formatted = dateWithoutSecond.toLocaleTimeString([], {
      timeStyle: 'short'
    });

    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const day = weekdays[date.getUTCDay()]
    const todayDate = date.toLocaleDateString()
  

  return (
   <>
        <aside className="w-[100%] mt-[15px] flex justify-start">
            <h1 className="font-roboto text-4xl mx-4">{day}</h1>
            <p className="text-xl font-semibold self-center mx-4">{todayDate}</p>
            <p className="text-2xl font-semibold self-center mx-4">{formatted}</p>
        </aside>

        {/* Weather Description */}
        { fulfilled ? (<CurrentWeatherInfo /> ) : <GifLoader height="300px" />}
     
   </>
  )
}
