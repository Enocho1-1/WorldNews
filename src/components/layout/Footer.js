
import { Link } from "react-router-dom"
import "./Footer.css"

export const Footer = ({object}) => {
  const {setCategory} = object

  const date = new Date()
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const day = weekdays[date.getUTCDay()]
  const todayDate = date.toLocaleDateString()
  const socials = ["bi bi-youtube","bi bi-twitter-x","bi bi-linkedin","bi bi-facebook","bi bi-instagram"]
  const footertext = ["About WorldNews","Terms and Conditions","Contacts","Cookie Policy","Distribution","Advertising","Jobs"]
  
  const HomeObj = {
    name:"NEWS",
    color:"bg-dark_orange",
    text: "text-dark_orange",
    border:"border-dark_orange",
    left: "border-l-dark_orange",
    bottom: "border-b-dark_orange",
    path: "/"
  }
  
  return (
    <footer className="text-gray-200">
       <Link to="/" onClick={() => setCategory(HomeObj)} className="flex"  className="flex text-4xl" >
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
