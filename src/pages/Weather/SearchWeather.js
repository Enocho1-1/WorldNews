import { useSearchParams } from "react-router-dom"
import { useTitle } from "../../hooks"

export const SearchWeather = () => {
    useTitle("location")
    const [params] = useSearchParams()
    let location = params.get("query")
    console.log(location)
  return (
    <div className="max-w-[1200px] w-[100%] flex font-open_sans">SearchWeather</div>
  )
}
