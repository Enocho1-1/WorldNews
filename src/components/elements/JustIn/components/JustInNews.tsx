import { useState } from "react"
import { useJustInNews } from "../../../../hooks/useJustInNews"
import { useNavigate } from "react-router-dom"
import { Object } from "../../../../App"
import { News } from "../../../DataStructures/NewsObj"
import { NewsData } from "../../../../hooks/useJustInNews"


interface  Props {
  headerObject:Object
}

export const JustInNews = ({headerObject}:Props) => {
  const {setCategory} = headerObject
  const [articles,setArticles] = useState(10)
  const navigate = useNavigate()
  const {data} = useJustInNews()
  const news = data.slice(0,articles) 


  const handleNavigate = (news: NewsData) => {
    navigate(`/News/${news.title}`,{state: {data:news}})
    setCategory(News)
  }
  return (
    <>
        <ul className="just-in-list">
          { news.map((item,index) => (
                  <li key={index} onClick={() => handleNavigate(item)} className="text-black py-3 px-4 flex items-center hover:cursor-pointer">
                    <span className="text-yellow-500 mr-2 self-center bi bi-clock-fill"></span> <p className="text-sm max-[1069px]:text-md line-clamp-2" title={item.title}>{item.title}</p>
                  </li>
          ))}
        </ul>
        {news.length < 50 &&  <button  onClick={() => { setArticles(prevState => prevState += 5)}} className="mt-10 border-[1px] border-black rounded-3xl font-bold text-lg self-center px-2 py-3 max-w-[12.5rem]">View More</button>}
       
    </>
  )
}
