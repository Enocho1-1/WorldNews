/* eslint-disable */
import { NavLink } from "react-router-dom"

export const SideMenu = () => {
  return (
    <div className="absolute top-0 left-0 flex flex-col z-10 w-[100%] min-h-[100vh] bg-gray-900">
        <form className="relative">
            <input type="text" className="w-[100%] py-2 px-2 text-md text-white bg-gray-700" placeholder="Search..." />
            <span className="text-white text-lg absolute top-2 right-3.5 bottom-2.5 bi bi-search"></span>
        </form>

        {/* Category Buttons */}
        {/* <ul>
           
           
        </ul> */}
    </div>
  )
}
