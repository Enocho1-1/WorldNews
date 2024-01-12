import { Link } from "react-router-dom"
import "./Footer.css"

export const Footer = () => {
  const socials = ["bi bi-youtube","bi bi-twitter-x","bi bi-linkedin","bi bi-facebook","bi bi-instagram"]
  return (
    <footer className="text-gray-200">
       <Link to="/"  className="flex text-4xl" >
            <h1 className="font-light">World</h1>
            <p className="font-semibold">News.</p>
        </Link>

        <div className="my-6 flex font-open_sans">
          <p className="text-lg">Social Channels</p>
          <aside className="flex flex-wrap ">
            {socials.map((social, index) => (<span key={index} className={`${social} mx-2 text-2xl`}></span>))}
          </aside>
        </div>
    </footer>
  )
}
