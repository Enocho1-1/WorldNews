import { useSearchParams } from "react-router-dom"
import { useSearchLocation } from "../../hooks"
import { useTitle } from "../../hooks"
import { LocationWeatherForm,LocationDetails } from "./components"

import { GifLoader } from "../../components"

export const SearchWeather = () => {
    const [params] = useSearchParams()
    let location = params.get("q")
    useTitle(`${location}`)
    const {fulfilled} = useSearchLocation(location)
    const responsiveCSS = "max-[720px]:mt-0 min-[720px]:max-[1340px]:mt-[120px] min-[1340px]:mt-[90px]"

  return (
    <div className="max-w-[1200px] w-[100%] flex font-open_sans">
        <section className={`relative max-w-inherit w-[100%] ${responsiveCSS}`}>
            <LocationWeatherForm/>
            { fulfilled ? <LocationDetails location={location}/>: <GifLoader height="300px" />}
        </section>
    </div>
  )
}
