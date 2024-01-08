import { useNavigate } from "react-router-dom"
import { navigateToArticlePage } from "../../../../utility"

export const FirstArticle = ({object}) => {
    const {article,image,title,description, date} = object
    const navigate = useNavigate()
  return (
    <aside className="category-box flex flex-col  max-[1281px]:max-w-[450px]  min-[1281px]:max-w-[600px]   overflow-hidden hover:cursor-pointer">
        <div onClick={() => navigateToArticlePage(navigate,title,article)} className="relative category-img h-[350px]" style={ {
                backgroundImage: `url(${image})`,
                backgroundSize:"cover",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: "50%"
        }}>
        </div>
        {/* Details */}
        <div onClick={() => navigateToArticlePage(navigate,title,article)} className="mt-4 px-3 py-4">
            <h1 className="font-roboto text-md max-[1069px]:text-lg">{title}</h1>
            <p className="mt-2 line-clamp-3 text-[15px]">{description ? description : "Content not availible"}</p>
            <div className="mt-4 flex text-xs text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-fill self-center mr-2" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/></svg>{date}</div>
        </div>
    </aside>
  )
}
