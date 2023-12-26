import { useSearchParams } from "react-router-dom"
import { useSearchLocation } from "../../hooks"
import { useTitle } from "../../hooks"
import { LocationWeatherForm } from "./components"

export const SearchWeather = () => {
    const [params] = useSearchParams()
    let location = params.get("q")
    useTitle(`${location}`)
    const {data:userLocation} = useSearchLocation(location)
    const { main,sys,weather,wind,} = userLocation
    const { feels_like,humidity,pressure,temp} = main
    const { country,sunrise} = sys
    const {main: weather_main,description} = weather[0]
    const {speed,deg,gust} = wind

  return (
    <div className="max-w-[1200px] w-[100%] flex font-open_sans">
        <section className="mt-[100px] max-w-inherit w-[100%]">
            <LocationWeatherForm/>
            <header className="mt-8 flex">
                <h1 className="font-roboto text-gray-800 text-5xl mx-4">{location.toUpperCase()},{country}</h1>

                <span className=" ml-[6.25rem] flex">
                  <h1 className="text-[2.813rem] text-orange-400 font-bold" data-testid = "temp">{Math.ceil(temp)}°F</h1>
                  <p className="text-[35px] ml-4 text-gray-700 font-bold " data-testid = "real-feel">| {Math.ceil(feels_like)}°F</p>
                </span>
            </header>
        
        </section>
    </div>
  )
}
