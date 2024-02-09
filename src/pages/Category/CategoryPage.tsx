import { useTitle } from "../../hooks"
import { useCategoryNews } from "../../hooks"
import { NavObject } from "../../App"
import { Primary,Secondary } from "./components"
import {GifLoader} from "../../components"
import "./Category.css"

interface CategoryProp{
  option:NavObject;
}
export const CategoryPage = ({option}:CategoryProp) => {
  const { name,color,border,api,left} = option
  const colorObj = {color:color,border:border,left:left}
  useTitle(name)
  const {data:news} = useCategoryNews(api)
  const responsiveCSS = "max-[769px]:mt-0 min-[769px]:max-[1340px]:mt-[100px] min-[1340px]:mt-[90px]"
  return (
    <div className="box-shadow max-w-[1200px] h-fit w-[100%] z-[1] font-open_sans">
        <section className={responsiveCSS} id="category-page" >
            <header className={`w-inherit flex border-b-2 ${border}`}>
              <span className={`${color} h-[40px] w-[30px]`}></span>
              <h1 className="font-semibold text-xl ml-4 self-center">Latest</h1>
            </header>
            
            {news.length === 0 
            ? 
            <GifLoader height="300px"/> 
            : 
            <>
              <Primary news={news} colors={colorObj}/>
              <Secondary news={news} colors={colorObj}/>
            </>
        
            }
        </section>
        
    </div>
  )
}
