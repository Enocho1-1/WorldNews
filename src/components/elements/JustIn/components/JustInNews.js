import { useState } from "react"
import { useJustInNews } from "../../../../hooks/useJustInNews"
import { Link } from "react-router-dom"

export const JustInNews = () => {
  const [articles,setArticles] = useState(10)
  const {data} = useJustInNews()
  const news = data.slice(0,articles) 
  return (
    <>
        <ul className="just-in-list">
          { news.map((item,index) => (
                  <li key={index} className="text-black py-3 px-2 flex items-center">
                    <Link className="flex"><span className="text-yellow-500 mr-2 self-center bi bi-clock-fill"></span> <p className="text-[14px] line-clamp-2" title={item.title}>{item.title}</p> </Link>
                  </li>
          ))}
        </ul>
        <button  onClick={() => { setArticles(prevState => prevState += 10)}} className="mt-10 border-[1px] border-black rounded-3xl text-bold text-lg self-center px-2 py-3 max-w-[12.5rem]">View More</button>
    </>
  )
}
