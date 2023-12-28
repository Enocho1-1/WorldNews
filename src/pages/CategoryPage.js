import { useTitle } from "../hooks"

export const CategoryPage = ({option}) => {
  const { name,color,border} = option
  useTitle(name)

  const responsiveCSS = "max-[720px]:mt-0 min-[720px]:max-[1340px]:mt-[120px] min-[1340px]:mt-[90px]"
  return (
    <div className="max-w-[1200px] w-[100%] flex font-open_sans">
        <section className={responsiveCSS} id="category-page" >
            <header className={`w-inherit flex border-b-2 ${border}`}>
              <span className={`${color} h-[40px] w-[30px]`}></span>
              <h1 className="font-semibold text-xl ml-4 self-center">Latest</h1>
            </header>
            
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus minus qui necessitatibus quaerat ad tenetur deleniti ducimus et numquam repellat?</div>
        </section>
        
    </div>
  )
}
