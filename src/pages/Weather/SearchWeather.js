import { useSearchParams } from "react-router-dom"
import { useSearchLocation } from "../../hooks"
import { useTitle } from "../../hooks"

export const SearchWeather = () => {
    const [params] = useSearchParams()
    let location = params.get("q")
    useTitle(`${location}`)
    const {data:userLocation} = useSearchLocation(location)
    const { main,sys,weather,wind,} = userLocation
    console.log(weather)
  return (
    <div className="max-w-[1200px] w-[100%] flex font-open_sans">
        <section className="mt-[100px]">
            <header>
                <h1 className="font-roboto text-gray-800 text-4xl mx-4">{location}</h1>
            </header>
        
        </section>
    </div>
  )
}
