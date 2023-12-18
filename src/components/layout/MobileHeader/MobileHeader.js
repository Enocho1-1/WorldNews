/* eslint-disable */
import { HeaderTop,HeaderBottom } from "./components"

export const MobileHeader = () => {
 
  return (
    <header className="max-w-full w-[100%]" data-testid="mobile-header">
      <HeaderTop/>
      <HeaderBottom />
    </header>
  )
}
