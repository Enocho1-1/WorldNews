import { useNavigate } from "react-router-dom"
import { navigateToArticlePage } from "../../../../utility"
import generic from "../../../../assets/images/world_news_2017.jpg"

export const FirstArticle = ({data}) => {
  const { image_url,title,pubDate,description} = data
  const posterImage = image_url
  const navigate = useNavigate()
  return (
    <aside className="category-box max-[1180px]:w-[100%] min-[1180px]:max-[1340px]:max-w-[32rem] min-[1340px]:max-w-[35rem]">
        {/* Article Image */}
        <img onClick={() => navigateToArticlePage(navigate,title,data)} src={image_url ? posterImage : generic} className="firstArticle-img " alt="new-img" />
        {/* Details */}
        <div onClick={() => navigateToArticlePage(navigate,title,data)} className="mt-4 px-3 py-4">
            <h1 className="font-roboto text-[20px] max-[1281px]:text-md">{title}</h1>
            <p className="mt-2 line-clamp-3 text-[15px]">{description ? description : "Content not availible"}</p>
            <div className="mt-4 flex text-xs text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-fill self-center mr-2" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/></svg>{pubDate}</div>
        </div>
    </aside>
  )
}
