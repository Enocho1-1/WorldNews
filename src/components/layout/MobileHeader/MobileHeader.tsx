/* eslint-disable */
import { useState } from "react"
import { HeaderProp } from "../DesktopHeader/Header"
import { HeaderTop,HeaderBottom } from "./components"
import "../Header.css"


export const MobileHeader = ({headerObject}:HeaderProp) => {
  const [isHidden, setIsHidden] = useState(false)
  return (
    <header className="relative max-w-full w-[100%]" data-testid="mobile-header">
      <HeaderTop isHidden={isHidden} setIsHidden={setIsHidden} headerObject={headerObject}/>
      <HeaderBottom isHidden={isHidden} setIsHidden={setIsHidden} headerObject={headerObject}/>
    </header>
  )
}
