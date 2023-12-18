/* eslint-disable */
import { useState } from "react"
import { HeaderTop,HeaderBottom } from "./components"

export const Header = () => {

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

  const headerObj = {
    navOptions: navOptions,
    category:category,
    search:search,
    setCategory:setCategory,
    setSearch:setSearch
  }
  
  return (
    <header id="header">
        <HeaderTop category={category}/>
        <HeaderBottom headerObject={headerObj}/>
    </header>
   
  )
}
