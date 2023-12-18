/* eslint-disable */
import { useMatchMedia } from "./hooks"

import { AllRoutes } from "./routes/AllRoutes"
import { Header,MobileHeader ,Footer } from "./components"

export const Main = () => {
  const { myQuery } = useMatchMedia(720)
  return (
    <div className="m-auto max-w-[1600px]">
      { myQuery && !myQuery.matches ? <Header/> : <MobileHeader/>}
        <AllRoutes/>
    </div>
  )
}
