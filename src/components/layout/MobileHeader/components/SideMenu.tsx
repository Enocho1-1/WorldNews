/* eslint-disable */
import { useRef } from "react"
import { NavLink,useNavigate } from "react-router-dom"
import {navOptions} from "../../../DataStructures/NavOptions"
import { WeatherObject } from "../../../DataStructures/WeatherObj"
import { SearchObject } from "../../../DataStructures/SearchObj"

export const SideMenu = ({setIsHidden,setCategory}) => {
  const notActive = "bg-gray-900 py-4 pl-6  border-b-[1px] border-gray-500 text-gray-200 text-md font-medium w-[100%] hover:border-l-[10px] hover:border-b-[1px]"
  const sideNavOption = [...navOptions, WeatherObject]
  const userSearch = useRef()
  const navigate = useNavigate()
  const sideMenuClick = (item) => {
    setIsHidden(false)
    setCategory(item)
  }

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${userSearch.current.value}`)
    userSearch.current.value = ""
    setIsHidden(false)
    setCategory(SearchObject)
  }


  return (
    <div className="absolute top-0 left-0 flex flex-col z-10 w-[100%] min-h-[100vh] font-open_sans bg-gray-900" data-testid="side-menu">
        <form onSubmit={handleSearch} className="relative">
            <input ref={userSearch} type="text" className="w-[100%] py-2 px-2 text-md text-white bg-gray-700" placeholder="Search..." />
            <span className="text-white text-lg absolute top-2 right-3.5 bottom-2.5 bi bi-search"></span>
        </form>

        {/* Category Buttons */}
        <ul className="w-inherit flex flex-col" data-testid="nav-options"> 
           {sideNavOption.map((item,index) => (
            <NavLink key={index} to={item.path} onClick={() => sideMenuClick(item)} className={({isActive}) => isActive ? (`bg-gray-900 py-2 border-l-[10px] border-b-[1px] text-md ${item.left} ${item.bottom} pl-6 w-[100%] text-gray-200`) : notActive }>
              {item.name}
            </NavLink>
           ))}
        </ul>
    </div>
  )
}
