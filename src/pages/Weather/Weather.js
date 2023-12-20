import { useState } from "react"
import { useTitle } from "../../hooks"
import { CurrentLocation } from "./components/CurrentLocation"

export const Weather = () => {
  useTitle("WEATHER")

 
  return (
    <div className="flex font-open_sans">
        <section className="w-[1200px] max-[720px]:mt-0 min-[720px]:max-[1340px]:mt-[120px] min-[1340px]:mt-[90px] flex flex-col">
          <header className="w-inherit flex border-b-2 border-b-light_cyan">
              <span className= "bg-light_cyan h-[2.5rem] w-[1.875rem]"></span>
              <h1 className="font-semibold text-xl ml-4 self-center">Weather</h1>
            </header>

            <form className="relative text-gray-900">
              <input type="text" className="w-[100%] py-2 px-2 text-md " placeholder="Search..." />
              <span className="text-lg absolute top-2 right-3.5 bottom-2.5 bi bi-search"></span>
            </form>
            
            <CurrentLocation/>
        </section>
    </div>
   
  )
}
