/* eslint-disable */
import { HeaderTop,HeaderBottom } from "./components"
import "../Header.css"

export const Header = ({headerObject}) => {
  const {category,setCategory,} = headerObject

  return (
    <header id="header">
        <HeaderTop category={category} setCategory={setCategory}/>
        <HeaderBottom headerObject={headerObject}/>
    </header>
   
  )
}
