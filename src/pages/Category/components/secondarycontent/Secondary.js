import { useState } from "react"
import { SecondaryArticles } from "./SecondaryArticles"

export const Secondary = ({news,colors}) => {
    const [lastIndex,setLastIndex] = useState(15)
    const secondaryNews = news.slice(5,lastIndex)
   
  return (
    <section className="mt-6 py-4 flex flex-col">
        < SecondaryArticles  news={secondaryNews} colors={colors}/>
        {secondaryNews.length === 30 ? null : (<button onClick={() => setLastIndex(prevState => prevState += 10)} className={`${colors.color} rounded-md p-2 self-end mr-8 font-semibold text-[15px] hover:text-gray-200`}>View More <span className="bi bi-plus text-[15px] font-bold"></span></button>)}
    </section>
  )
}
