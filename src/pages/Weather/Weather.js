import { useRef,useState } from "react"
import { useNavigate } from "react-router-dom"
import { useTitle } from "../../hooks"
import { CurrentLocation } from "./components"
import { SearchWeather } from "./SearchWeather"

export const Weather = () => {
  useTitle("WEATHER")
  // const [search,setSearch] = useState(false)
  const navigate = useNavigate()
  const userSearch = useRef()
  const responsiveCSS = "max-[720px]:mt-0 min-[720px]:max-[1340px]:mt-[120px] min-[1340px]:mt-[90px]"

  const handleSearch = (e) => {
    e.preventDefault()
    let userInput = userSearch.current.value
    switch(userInput){
      case '':
        alert('Please enter a city name')
        break;
      default:
          navigate(`/search-location?q=${userInput}`)
    }
   
    userSearch.current.value = ""
  }

  
  return (
    <div className="max-w-[1200px] w-[100%] flex font-open_sans">
        <section className={responsiveCSS} id="weather-page">
          <header className="w-inherit flex border-b-2 border-b-light_cyan">
              <span className= "bg-light_cyan h-[2.5rem] w-[1.875rem]"></span>
              <h1 className="font-semibold text-xl ml-4 self-center">Weather</h1>
            </header>

            <form onSubmit={(e) => handleSearch(e)} className="relative text-gray-900">
              <input ref={userSearch} type="text" className="w-[100%] py-2 px-2 text-md " placeholder="Search..." />
              <button type="submit" className="text-lg absolute top-2 right-3.5 bottom-2.5 bi bi-search"></button>
            </form>
            
            <CurrentLocation/> 
          
        </section>
    </div>
   
  )
}
