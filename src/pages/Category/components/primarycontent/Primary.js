
import { FirstArticle } from "./FirstArticle"
import { CategoryCard } from "../CategoryCard"
import generic from "../../../../assets/images/world_news_2017.jpg"

export const Primary = ({news,colors}) => {
    const {border,left} = colors
    const { image_url,title,pubDate,description} = news[0]
    const primaryNews = news.slice(1,4)

    const posterImage = image_url ? image_url : generic


    const firstArticleObj = {
        article: news[0],
        image: posterImage,
        title: title,
        date: pubDate,
        description: description,
    }
    
  return (
    <section className="flex w-inherit">
        <FirstArticle object={firstArticleObj}/>

        <aside className="ml-4 flex flex-col py-6  items-center h-[200] max-w-[500px]">
            {primaryNews.map((item,index) => (
                <CategoryCard key={index} data={item} borderColor={border} left={left}/>
            ))}
        </aside>
        
    </section>
  )
}
