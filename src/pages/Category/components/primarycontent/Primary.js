
import { FirstArticle } from "./FirstArticle"
import { CategoryCard } from "../CategoryCard"
import generic from "../../../../assets/images/world_news_2017.jpg"

export const Primary = ({news,colors}) => {
    const {border,left} = colors
    const primaryNews = news.slice(1,4)

  return (
    <section className="flex w-inherit">
        <FirstArticle data={news[0]}/>

        <aside className="ml-4 flex flex-col py-6  items-center h-[200] max-w-[500px]">
            {primaryNews.map((item,index) => (
                <CategoryCard key={index} data={item} borderColor={border} left={left}/>
            ))}
        </aside>
        
    </section>
  )
}
