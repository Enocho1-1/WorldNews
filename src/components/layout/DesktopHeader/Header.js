/* eslint-disable */
import { useState } from "react"
import { HeaderTop,HeaderBottom } from "./components"
import {navOptions} from "../../arrays/NavOptions"

export const Header = () => {

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
