import { useState,useEffect } from "react"
import { useLocation } from "react-router-dom"
import { SecondaryArticles } from "./SecondaryArticles"

export const Secondary = ({news,colors}) => {
    const [lastIndex,setLastIndex] = useState(15)
    const secondaryNews = news.slice(5,lastIndex)
    const location = useLocation()

    // Reset Last Index to initial value on page location change
    useEffect(() => {
        if(lastIndex !== 15){
            setLastIndex(15)
        }
    },[location])
  return (
    <section className="my-8 py-4 flex flex-col">
        < SecondaryArticles  news={secondaryNews} colors={colors}/>
        {secondaryNews.length === 30 ? null : (<button onClick={() => setLastIndex(prevState => prevState += 10)} className={`${colors.color} rounded-md p-2 self-end mt-4 mr-8 font-semibold text-[15px] hover:text-gray-200`}>View More <span className="bi bi-plus text-[15px] font-bold"></span></button>)}
    </section>
  )
}
