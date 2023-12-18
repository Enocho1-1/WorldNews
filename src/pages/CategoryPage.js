import { useTitle } from "../hooks"

export const CategoryPage = ({option}) => {
  const { name,color,border} = option
    useTitle(name)
  return (
    <div className=" flex font-open_sans">
        <section className="w-[1200px] mt-[90px] flex flex-col">
            <header className={`w-inherit flex border-b-2 ${border}`}>
              <span className={`${color} h-[40px] w-[30px]`}></span>
              <h1 className="font-semibold text-xl ml-4 self-center">Latest</h1>
            </header>
            
        </section>
        
    </div>
  )
}
