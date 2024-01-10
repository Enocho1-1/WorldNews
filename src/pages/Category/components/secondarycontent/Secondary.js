import { useState } from "react"
import { SecondaryArticles } from "./SecondaryArticles"

export const Secondary = ({news,colors}) => {
    const [lastIndex,setLastIndex] = useState(15)
    const secondaryNews = news.slice(5,lastIndex)

  return (
    <section className="mt-6">
        < SecondaryArticles  news={secondaryNews} colors={colors}/>
    </section>
  )
}
