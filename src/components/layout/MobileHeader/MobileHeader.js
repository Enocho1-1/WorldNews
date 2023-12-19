/* eslint-disable */
import { useState } from "react"
import { HeaderTop,HeaderBottom,SideMenu } from "./components"

export const MobileHeader = () => {
  const [isHidden, setIsHidden] = useState(false)
  return (
    <header className="relative max-w-full w-[100%]" data-testid="mobile-header">
      <HeaderTop isHidden={isHidden} setIsHidden={setIsHidden}/>
      <HeaderBottom isHidden={isHidden} setIsHidden={setIsHidden}/>
    </header>
  )
}
