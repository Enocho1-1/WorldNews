/* eslint-disable */
import { HeaderTop,HeaderBottom } from "./components"

export const Header = ({headerObject}) => {
  const {category,setCategory,} = headerObject

  return (
    <header id="header">
        <HeaderTop category={category} setCategory={setCategory}/>
        <HeaderBottom headerObject={headerObject}/>
    </header>
   
  )
}
