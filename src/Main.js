/* eslint-disable */
import { useMatchMedia } from "./hooks"

import { AllRoutes } from "./routes/AllRoutes"
import { Header,MobileHeader ,Footer,JustIn } from "./components"

export const Main = () => {
  const { myQuery } = useMatchMedia(720)
  return (
    <div className="relative m-auto max-w-[1600px] font-open_sans">
      { myQuery && !myQuery.matches ? <Header/> : <MobileHeader/>}
        <AllRoutes/>
        <JustIn/>
    </div>
  )
}
