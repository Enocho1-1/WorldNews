import { useState } from "react"
import { SideMenu } from "./SideMenu"
import { navOptions } from "../../../arrays/NavOptions"
import { MobileJustIn } from "../../../elements/JustIn/MobileJustIn"

export const HeaderBottom = ({isHidden,setIsHidden}) => {
  const [category,setCategory] = useState(navOptions[0])
  const [hide,setHide] = useState(false)
  return (
    <div>

      <section className="relative h-[50px] w-[100%] flex font-open_sans">
          {/* Category Topic */}

          <span className={`h-inherit max-w-[35%] px-2 bg-gray-900 flex justify-center items-center border-y-2 ${category.border}`}>
            <h1 className={`${category.text} text-lg font-semibold`}>{category.name}</h1>
          </span>

          {/* Just-In News */}

          <button onClick={() => setHide(!hide)} className="h-inherit w-[100%] flex justify-start items-center border-y-2">
            <h1 className="ml-4 text-xl text-gray-600 font-semibold hover:text-black ">JUST IN</h1>
          </button>

          {/* SideMenu */}

          { isHidden && <SideMenu setIsHidden={setIsHidden} setCategory={setCategory}/>}
      </section>

      {/* Mobile Just In News */}
      { hide && <MobileJustIn />}
    </div>
  
  )
}
