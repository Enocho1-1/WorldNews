
import { FirstArticle } from "./FirstArticle"
import { PrimaryArticles } from "./PrimaryArticles"

export const Primary = ({news,colors}) => {

    const primaryNews = news.slice(1,4)

  return (
    <section className="flex max-[1180px]:flex-col max-[1180px]:items-center w-inherit">
        <FirstArticle data={news[0]}/>
        <PrimaryArticles news={primaryNews} colors={colors}/>
    </section>
  )
}
