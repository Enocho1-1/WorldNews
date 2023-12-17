/* eslint-disable */
import { useState } from "react"
import { Link } from "react-router-dom"
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
  const navOptions = [
    { 
      name:"NEWS",
      color:"bg-dark_orange",
      text: "text-dark_orange",
      path: "/"
    },
    { 
      name:"BUSINESS",
      color:"bg-vivid_cyan",
      text: "text-vivid_cyan",
      path: "/business"
    },
    { 
      name:"SPORTS",
      color:"bg-pure_green",
      text: "text-pure_green",
      path: "/sports"
    },
    { 
      name:"ENTERTAINMENT",
      color:"bg-bright_blue",
      text: "text-bright_blue",
      path: "/entertainment"
    },
    { 
      name:"HEALTH",
      color:"bg-pure_yellow",
      text: "text-pure_yellow",
      path: "/health"
    },
    { 
      name:"SCIENCE",
      color:"bg-pure_gray",
      text: "text-pure_gray",
      path: "/science"
    },
    { 
      name:"TECHNOLOGY",
      color:"bg-moderate_violet",
      text: "text-moderate_violet",
      path: "/tech"
    }
  ]
  const [category,setCategory] = useState(navOptions[0])
  const [search, setSearch] = useState(true)

  return (
    <header className="flex flex-col">

      {/* First Layer */}
       <div className="sticky bg-gray-900 w-inherit h-[3.75rem] flex justify-between">
          <aside className=" bg-orange_red text-gray-900 px-4 h-inherit text-[2.5rem] flex items-center font-open_sans"> 
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
          </aside>
          <h1 className={`absolute top-2 left-[23%] ${category.text} text-4xl`}>{category.name}</h1>
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

        {/* Second Layer */}
        <div className="flex w-inherit h-[1.875rem]">
          <nav className={`${category.color} h-[100%] w-[85%] flex justify-around font-open_sans`}>
            {navOptions.map((item,index) => (
              <a key={index} onClick={() => setCategory(item)} className="hover:cursor-pointer mx-2 text-lg font-medium">
                {item.name}
              </a>
            ))}
          </nav>
          <aside className={ search ? ("nav_secondary bg-gray-700 h-[100%] w-[25%] flex justify-evenly") : ("nav_secondary bg-gray-700 h-[100%] w-[15%] flex justify-evenly")}>
              <div className="nav_secondary_item flex justify-center items-center text-lg">
                <span className="bi bi-tv"></span>
                <h1 className="mx-2 ">LIVE</h1>
              </div>

               <div className="nav_secondary_item">
                <span className="bi bi-cloud-sun"></span>
              </div>

              <div className={ search ? ("text-gray-200 w-[15.625rem] flex justify-center items-center hover:cursor-pointer"): ("nav_secondary_item")}>
                <span onClick={() => setSearch(!search)} className="bi bi-search"></span>
                { search && 
                  (
                    <form>
                      <input type="text" className=" ml-4 text-md bg-transparent" placeholder="Search..." />
                    </form>
                  )
                }
              </div> 
          </aside>
        </div>
    </header>
   
  )
}
