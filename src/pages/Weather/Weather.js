import { useTitle } from "../../hooks"
import { CurrentLocation,LocationWeatherForm } from "./components"
import "./Weather.css"

export const Weather = () => {
  useTitle("WEATHER")
  const responsiveCSS = "max-[720px]:mt-0 min-[720px]:max-[1340px]:mt-[120px] min-[1340px]:mt-[90px]"

  return (
    <div className="content-div font-open_sans">
        <section className={responsiveCSS} id="weather-page">
          <header className="w-inherit flex border-b-2 border-b-light_cyan">
              <span className= "bg-light_cyan h-[2.5rem] w-[1.875rem]"></span>
              <h1 className="font-semibold text-xl ml-4 self-center">Weather</h1>
            </header>
            <LocationWeatherForm/>
            <CurrentLocation/> 
        </section>
    </div>
   
  )
}
