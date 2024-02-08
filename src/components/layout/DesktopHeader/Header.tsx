/* eslint-disable */
import { HeaderTop,HeaderBottom } from "./components"
import { Object } from "../../../App"
import "../Header.css"

interface HeaderProp{
  headerObject:Object;
}
export const Header = ({headerObject}: HeaderProp) => {
  const {setCategory,category} = headerObject
  return (
    <header id="header">
        <HeaderTop category={category} setCategory={setCategory}/>
        <HeaderBottom headerObject={headerObject}/>
    </header>
   
  )
}
