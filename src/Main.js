/* eslint-disable */
import { useState } from "react"
import { useMatchMedia } from "./hooks"
import { AllRoutes } from "./routes/AllRoutes"
import { Header,MobileHeader ,Footer,JustIn } from "./components"
import { navOptions } from "./components/arrays/NavOptions"

export const Main = () => {
  const [category,setCategory] = useState(navOptions[0])
  const [search, setSearch] = useState(false)
  const { myQuery } = useMatchMedia(769)

  const headerObj = {
    navOptions: navOptions,
    category:category,
    search:search,
    setCategory:setCategory,
    setSearch:setSearch
  }

  return (
    <div className="relative m-auto max-w-[1600px] font-open_sans">
      { myQuery && !myQuery.matches ? <Header headerObject={headerObj}/> : <MobileHeader headerObject={headerObj} />}
        <section className="flex">
          <AllRoutes/>
          <JustIn headerObject={headerObj} />
        </section>
    </div>
  )
}
