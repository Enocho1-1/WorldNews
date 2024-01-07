/* eslint-disable */
import { useRef } from "react"
import { NavLink, useNavigate} from "react-router-dom"

export const HeaderBottom = ({headerObject}) => {

  const { navOptions,category,search,setCategory,setSearch} = headerObject
  const hiddenSearchStyling= "nav_secondary w-[15%]"
  const SearchStyling= "nav_secondary w-[25%]"
  const istActiveClass = "mx-2 text-md text-md  font-bold"
  const isNotActive = "hover:cursor-pointer mx-2 text-md text-md  font-medium"
  const weatherOption =  { 
    name:"WEATHER",
    color:"bg-light_cyan",
    text: "text-light_cyan",
    border:"border-light_cyan",
    left: "border-l-light_cyan",
    bottom: "border-b-light_cyan",
    path: "/weather/current-location"
  }
  const SearchObj = { 
    name: null,
    color:"bg-dark_orange",
    text: "text-dark_orange",
    border:"border-dark_orange",
    left: "border-l-dark_orange",
    bottom: "border-b-dark_orange",
    path: null
  }
  const userSearch = useRef()
  const navigate = useNavigate()
  
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${userSearch.current.value}`)
    userSearch.current.value = ""
    setSearch(false)
    setCategory(SearchObj)
  }
  

  return (
    <div className="relative desktop-second-layer flex w-inherit max-h-[2rem] max-[1340px]:flex-col">
    {/* Category Nav Menu */}
    <nav className={`${category.color} h-inherit w-[85%] max-[1340px]:w-[100%] flex flex-wrap justify-around font-open_sans`}>
      {navOptions.map((item,index) => (
          <NavLink key={index} to={`${item.path}`} onClick={() => setCategory(item)} className={({isActive}) =>  isActive ? istActiveClass: isNotActive }>{item.name} </NavLink>
      ))}
    </nav>

    {/* Live,Weather,Search Menu */}
    <aside className={ search ? (`${SearchStyling}`) : (`${hiddenSearchStyling}`)}>
        <div className="nav_secondary_item">
          <span className="mx-[2px] bi bi-tv"></span>
          <h1 className="text-sm self-center mx-[2px]">LIVE</h1>
        </div>

         <div className="nav_secondary_item">
          <NavLink to="/weather/current-location"><span className="text-xl bi bi-cloud-sun" onClick={() => setCategory(weatherOption)}></span></NavLink>
        </div>

        {/* Search Input */}
        <div className={ search ? ("nav_secondary_extended"): ("nav_secondary_item")}>
          <span onClick={() => setSearch(!search)} className="bi bi-search"></span>
          { search && 
            (
              <form onSubmit={handleSearch} className="relative">
                <input ref={userSearch} type="text" className=" top-0 left-0 text-md bg-transparent" placeholder="Search..." />
              </form>
            )
          }
        </div> 
    </aside>
  </div>
  )
}
