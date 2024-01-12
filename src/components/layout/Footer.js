import { Link } from "react-router-dom"
import "./Footer.css"

export const Footer = () => {
  const socials = ["bi bi-youtube","bi bi-twitter-x","bi bi-linkedin","bi bi-facebook","bi bi-instagram"]
  const footertext = ["About WorldNews","Terms and Conditions","Contacts","Cookie Policy","Distribution","Advertising","Jobs"]
  return (
    <footer className="text-gray-200">
       <Link to="/"  className="flex text-4xl" >
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
    </footer>
  )
}
