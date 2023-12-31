/* eslint-disable */
import { useState } from "react"
import { HeaderTop,HeaderBottom } from "./components"

export const MobileHeader = ({headerObject}) => {
  const [isHidden, setIsHidden] = useState(false)
  return (
    <header className="relative max-w-full w-[100%]" data-testid="mobile-header">
      <HeaderTop isHidden={isHidden} setIsHidden={setIsHidden}/>
      <HeaderBottom isHidden={isHidden} setIsHidden={setIsHidden} headerObject={headerObject}/>
    </header>
  )
}
