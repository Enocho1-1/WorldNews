/* eslint-disable */
import { useState } from "react";
import { Link } from "react-router-dom";
import twitter from "../../../../assets/social_media/twitter.png"
import youtube from "../../../../assets/social_media/youtube.png"
import instagram from "../../../../assets/social_media/instagram.png"
import linkedin from "../../../../assets/social_media/linkedin.png"
import facebook from "../../../../assets/social_media/facebook.png"

export const HeaderTop = ({category,setCategory}) => {
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

    const HomeObj = {
      name:"",
      color:"bg-dark_orange",
      text: "text-dark_orange",
      border:"border-dark_orange",
      left: "border-l-dark_orange",
      bottom: "border-b-dark_orange",
      path: "/"
    }
  return (
    <div className="bg-gray-900  h-inherit flex justify-between">
        <aside className="flex font-open_sans"> 
        <div className="bg-orange_red text-gray-900 px-4 h-inherit text-[2.2rem] flex items-center">
          <Link to="/" onClick={() => setCategory(HomeObj)} className="flex" >
            <h1 className="font-light">World</h1>
            <p className="font-semibold">News.</p>
          </Link>
         

            {/* Language Dropdown Menu*/}
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
        </div>

        {/* Category Name*/}
        <div className=" mx-2 flex justify-center items-center h-inherit bg-gray-900">
          <h1 className={`${category.text} text-[2.2rem]`}>{category.name}</h1>
        </div>
        
        </aside>

        {/* Social Media Icons */}
        <aside className="h-inherit flex justify-between items-center mr-6 max-md:hidden">
        <span className="flex">
            <h1 className="text-gray-200 text-md font-medium">Join us</h1>
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
