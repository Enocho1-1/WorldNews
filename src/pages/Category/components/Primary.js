import { useNavigate } from "react-router-dom"
import { CategoryCard } from "./CategoryCard"
import generic from "../../../assets/images/world_news_2017.jpg"

export const Primary = ({news,colors}) => {
    const {border,left} = colors
    const { image_url,title,pubDate,description,country} = news[0]
    const primaryNews = news.slice(1,4)

    const posterImage = image_url
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/News/${title}`,{state: {data:news[0]}})
      }
    
  return (
    <section className="flex w-inherit">
        {/* First News Article */}
        <aside className="category-box flex flex-col max-w-[450px] max-[1069px]:max-w-[650px] overflow-hidden hover:cursor-pointer">
            <div onClick={() => handleNavigate()} className="relative category-img h-[350px] w-inherit" style={ {
                    backgroundImage: `url(${image_url ? posterImage : generic})`,
                    backgroundSize:"cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPositionY: "50%"
            }}>
            </div>
            {/* Details */}
            <div onClick={() => handleNavigate()} className="mt-2 px-3 py-4">
                <h1 className="font-roboto text-md max-[1069px]:text-lg">{title}</h1>
                <p className="mt-2 line-clamp-2 text-[15px]">{description ? description : "Content not availible"}</p>
                <div className="mt-4 flex text-xs text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-fill self-center mr-2" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/></svg>{pubDate}</div>
            </div>
        </aside>

        <aside className="ml-4 flex flex-col  items-center h-[200] w-[500px]">
            {primaryNews.map((item,index) => (
                <CategoryCard key={index} data={item} borderColor={border} left={left}/>
            ))}
        </aside>
        
    </section>
  )
}
