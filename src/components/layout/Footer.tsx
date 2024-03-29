import { Object } from "../../App"
import { HomeObject } from "../DataStructures/HomeObj"
import { weekdays,socials,footertext } from "../DataStructures/FooterArrays"
import { Link } from "react-router-dom"
import "./Footer.css"

interface FooterProp{
  object: Object
}
export const Footer = ({object}:FooterProp) => {
  const {setCategory} = object
  const date = new Date()
  const day = weekdays[date.getUTCDay()]
  const todayDate = date.toLocaleDateString()

  return (
    <footer className="text-gray-200">
       <Link to="/" onClick={() => setCategory(HomeObject)}   className="flex text-4xl" >
            <h1 className="font-light">World</h1>
            <p className="font-semibold">News.</p>
        </Link>

        {/* Socail Media Icons */}
        <div className="my-4 flex font-open_sans">
          <p className="self-center text-md mr-6">Social Channels</p>
          <aside className="flex flex-wrap ">
            {socials.map((social, index) => (<span key={index} className={`${social} mx-2 text-2xl`}></span>))}
          </aside>
        </div>

        <div className="mt-2 flex flex-wrap ">
          {footertext.map((text,index) => (<p key={index} className="text-md mx-2">{text}</p>))}
        </div>

        <div className="mt-2 text-gray-400 flex text-xs max-[380px]:hidden">
          <p className="mr-2">{day}</p>
          <p className="mr-2">{todayDate}</p>
          <p>Englis</p>
        </div>
    </footer>
  )
}
