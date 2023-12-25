import { useSearchParams } from "react-router-dom"
import { useSearchLocation } from "../../hooks"
import { useTitle } from "../../hooks"

export const SearchWeather = () => {
    const [params] = useSearchParams()
    let location = params.get("q")
    useTitle(`${location}`)
    const {data:userLocation} = useSearchLocation(location)
    console.log(userLocation)
  return (
    <div className="max-w-[1200px] w-[100%] flex font-open_sans">
        <section className="mt-[100px]">
            {location}
        </section>
    </div>
  )
}
