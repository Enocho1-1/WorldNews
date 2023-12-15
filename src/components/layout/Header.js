/* eslint-disable */
import { useState } from "react"
import twitter from "../../assets/social_media/twitter.png"
import youtube from "../../assets/social_media/youtube.png"
import instagram from "../../assets/social_media/instagram.png"
import linkedin from "../../assets/social_media/linkedin.png"
import facebook from "../../assets/social_media/facebook.png"

export const Header = () => {

  const [language, setLanguage] = useState("EN")
  const [hidden, setHidden] = useState(false)
  const socials = [
    {
      img: twitter,
      name: "X"
    },
    {
      img: youtube,
      name: "Youtube"
    },
    {
      img: instagram ,
      name: "Instagram"
    },
    {
      img:  linkedin,
      name: "Linkedin"
    },
    {
      img: facebook,
      name: "Facebook"
    }

  ]
  return (
    <div className="sticky bg-gray-900 w-inherit h-[3.75rem] flex justify-between">
      <header className=" bg-blue-400 text-gray-900 px-4 h-inherit text-[2.5rem] flex items-center font-open_sans"> 
        <h1 className="font-light">World</h1>
        <p className="font-semibold">News.</p>

        <div className="relative">
          <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" onClick={ () => setHidden(!hidden)} className=" font-medium text-[1.25rem] px-5 py-2.5 text-center inline-flex items-center" type="button">{language}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
          </svg>
          </button>

    
          <div id="dropdownHover" className={hidden ? (`absolute top-[90%] left-[40%] z-10 bg-gray-200 text-gray-900 divide-y divide-gray-100 rounded-lg shadow w-auto">`) : (`absolute top-[90%] left-[40%] z-10 hidden bg-gray-200 text-gray-900 divide-y divide-gray-100 rounded-lg shadow w-auto">`)}>
              <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownHoverButton">
                { ["EN","FR"].map((item,index) => (
                  <li key={index} >
                   <a href="#" onClick={() => {setLanguage(item); setHidden(false)}} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{item}</a>
                  </li>
                ))}
              </ul>
          </div>
        </div>
      </header>

      {/* Social Media */}
      <aside className="h-inherit flex items-center mr-6">
        <h1 className="text-gray-200 text-md font-medium">Join us</h1>
    
        <span className="flex">
          { socials.map((item,index) => (
            <div key={index}>
              <img className="h-[20px] w-[20px] mx-2" src={item.img} alt="social_icon" title={item.name} />
            </div>
          ))}
        </span>
      </aside>
         
    </div>
  )
}
