import { useTitle } from "../../hooks"

export const Weather = () => {
  useTitle("WEATHER")
  return (
    <div className="flex font-open_sans">
        <section className="w-[1200px] max-[720px]:mt-0 min-[720px]:max-[1340px]:mt-[120px] min-[1340px]:mt-[90px] flex flex-col">
          <header className="w-inherit flex border-b-2 border-b-light_cyan">
              <span className= "bg-light_cyan h-[40px] w-[30px]"></span>
              <h1 className="font-semibold text-xl ml-4 self-center">Weather</h1>
            </header>
        
        </section>
    </div>
   
  )
}
