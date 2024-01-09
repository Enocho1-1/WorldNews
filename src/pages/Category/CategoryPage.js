import { useTitle } from "../../hooks"
import { useCategoryNews } from "../../hooks"
import { Primary } from "./components/primarycontent/Primary"
import {GifLoader} from "../../components"

export const CategoryPage = ({option}) => {
  const { name,color,border,api,left} = option
  const colorObj = {color:color,border:border,left:left}
  useTitle(name)
  const {data:news} = useCategoryNews(api)
  const responsiveCSS = "max-[769px]:mt-0 min-[769px]:max-[1340px]:mt-[120px] min-[1340px]:mt-[90px]"
  return (
    <div className=" relative box-shadow max-w-[1200px] w-[100%] z-[1] font-open_sans">
        <section className={responsiveCSS} id="category-page" >
            <header className={`w-inherit flex border-b-2 ${border}`}>
              <span className={`${color} h-[40px] w-[30px]`}></span>
              <h1 className="font-semibold text-xl ml-4 self-center">Latest</h1>
            </header>
            
            {news.length === 0 ? <GifLoader height="300px"/> : <Primary news={news} colors={colorObj}/>}
        </section>
        
    </div>
  )
}
