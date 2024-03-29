import { useSearchParams } from "react-router-dom"
import { useSearchLocation } from "../../hooks"
import { useTitle } from "../../hooks"
import { LocationWeatherForm,LocationDetails,LocationNotFound } from "./components"

export const SearchWeather = () => {
    const [params] = useSearchParams()
    let location = params.get("q")
    useTitle(`${location}`)
    const {fulfilled} = useSearchLocation(location)
    const responsiveCSS = "max-[720px]:mt-0 min-[720px]:max-[1340px]:mt-[120px] min-[1340px]:mt-[90px]"

  return (
    <div className="content-div font-open_sans">
        <section className={`relative max-w-inherit w-[100%] h-screen ${responsiveCSS}`}>
            <LocationWeatherForm/>
            { fulfilled ? <LocationDetails location={location}/>: <LocationNotFound value={location} />}
        </section>
    </div>
  )
}
