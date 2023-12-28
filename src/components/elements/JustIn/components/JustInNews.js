import { useState } from "react"
import { useJustInNews } from "../../../../hooks/useJustInNews"
import { useNavigate } from "react-router-dom"


export const JustInNews = ({headerObject}) => {
  const {setCategory} = headerObject
  const [articles,setArticles] = useState(10)
  const navigate = useNavigate()
  const {data} = useJustInNews()
  const news = data.slice(0,articles) 
  const News =  { 
    name:"NEWS",
    color:"bg-dark_orange",
    text: "text-dark_orange",
    border:"border-dark_orange",
    left: "border-l-dark_orange",
    bottom: "border-b-dark_orange",
    path: ""
  }

  const handleNavigate = (news) => {
    navigate(`/individual/${news.title}`,{state: {data:news}})
    setCategory(News)
  }
  return (
    <>
        <ul className="just-in-list">
          { news.map((item,index) => (
                  <li key={index} onClick={() => handleNavigate(item)} className="text-black py-3 px-2 flex items-center hover:cursor-pointer">
                    <span className="text-yellow-500 mr-2 self-center bi bi-clock-fill"></span> <p className="text-[14px] line-clamp-2" title={item.title}>{item.title}</p>
                  </li>
          ))}
        </ul>
        <button  onClick={() => { setArticles(prevState => prevState += 10)}} className="mt-10 border-[1px] border-black rounded-3xl font-bold text-lg self-center px-2 py-3 max-w-[12.5rem]">View More</button>
    </>
  )
}
