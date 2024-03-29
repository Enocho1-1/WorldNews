import { useNavigate } from "react-router-dom"
import { useImgLoad } from "../../../hooks"
import { NewsData } from "../../../hooks/useJustInNews"
import { BlurEffect } from "../../../components"
import news from "../../../assets/images/world_news_2017.jpg"

interface QueryProp{
  data: NewsData
}
export const SearchQueryCard = ({data}:QueryProp) => {
  const {country,image_url,title,description,pubDate,keywords} = data
  const navigate = useNavigate()
  const posterImage = image_url ? image_url : news
  const {imgLoad} = useImgLoad(posterImage)
  
  const handleNavigate = (data:NewsData) => {
    navigate(`/News/${title}`,{state: {data:data}})
  }
  return (
    <>
        <span className="mt-8 max-w-inherit w-[100%] flex flex-col">
            <header className="w-inherit flex border-l-[5px] border-l-dark_orange">
              <span className= "bg-dark_orange h-[1.5rem]"></span>
              <h1 className="font-semibold text-xl ml-4 self-center">{keywords ? keywords[0] : country[0]}</h1>
            </header>

            <div className="search-box flex overflow-hidden">
                {!imgLoad ? <BlurEffect height="h-[12.5rem]" width="w-[100%]" maxWidth="max-w-[15.625rem]"/> :  (<img src={posterImage} onClick={() => handleNavigate(data)}  className="searchquery-img h-[12.5rem] w-[100%] max-w-[15.625rem] hover:cursor-pointer" alt="news" />)}

                <aside onClick={() => handleNavigate(data)} className="ml-10 text-md  flex flex-col hover:cursor-pointer">
                    <h1 className="font-semibold">{title}</h1>
                    <p className="mt-4 px-2 line-clamp-3 max-[700px]:hidden ">{description}</p>
                    <div className="mt-4 flex"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-fill self-center mx-2" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/></svg>{pubDate}</div>
                </aside>
            </div>
        </span>
    </>
  )
}
