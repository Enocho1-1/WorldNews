/* eslint-disable */
import { useNavigate } from "react-router-dom"
import { navigateToArticlePage } from "../../../utility"
import generic from "../../../assets/images/world_news_2017.jpg"

export const CategoryCard = ({data,border,left}) => {
    const navigate = useNavigate()
    const {title,pubDate,image_url,keywords} = data
    const posterImage = image_url

  return (
    <>
        <span className="mt-2 flex flex-col max-w-inherit w-[100%]">
            <header className={`w-inherit flex border-l-[5px] ${left}`}>
                <span className= {`${border} h-[1.5rem] px-2`}>
                    <h1 className="text-sm max-w-[15.625rem] truncate ...">{keywords != null ? keywords[0].toUpperCase() : "Top News"}</h1>
                </span>
            </header>

            <div className="search-box h-[9rem] flex overflow-hidden">
                <img src={image_url === null || image_url.includes("gif") || image_url.includes("Linkedin") || image_url.includes("LinkedIn") ? generic  : posterImage} onClick={() => navigateToArticlePage(navigate,title,data)}   className="searchquery-img h-inherit max-w-[10.938rem] w-[100%] hover:cursor-pointer" alt="news" />
                <aside  onClick={() => navigateToArticlePage(navigate,title,data)} className="ml-8 flex flex-col text-[17px] max-[1069px]:text-md hover:cursor-pointer">
                    <h1 className="font-semibold line-clamp-3 px-2" title={title}>{title}</h1>
                    <div className="mt-4 flex text-gray-500 text-xs my-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-fill self-center mx-2" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/></svg>{pubDate}</div>
                </aside>
            </div>
        </span>
    </>
  )
}
