import {useRef} from "react"
import {useNavigate} from "react-router-dom"

export const LocationWeatherForm = () => {
    const navigate = useNavigate()
    const userSearch = useRef()

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
    <form onSubmit={(e) => handleSearch(e)} className="relative text-gray-900">
        <input ref={userSearch} type="text" className="w-[100%] py-2 px-2 text-md " placeholder="Search..." />
        <button type="submit" className="text-lg absolute top-2 right-3.5 bottom-2.5 bi bi-search"></button>
    </form>
  )
}
