/* eslint-disable */
import { useMatchMedia } from "./hooks"
import { AllRoutes } from "./routes/AllRoutes"
import { Header,MobileHeader ,JustIn } from "./components"
import {Object} from "./App"

interface MainProp{
  object: Object
}

export const Main = ({object}:MainProp) => {

  const { myQuery } = useMatchMedia(769)
  return (
    <div className="relative m-auto pb-[8rem] max-w-[1600px] font-open_sans">
      { myQuery && !myQuery.matches ? <Header headerObject={object}/> : <MobileHeader headerObject={object} />}
        <section className="flex">
          <AllRoutes/>
          <JustIn headerObject={object} />
        </section>
    </div>
  )
}
