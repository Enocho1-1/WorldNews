import { useNavigate } from "react-router-dom"
import { NewsData } from "../../../hooks/useJustInNews"
import news from "../../../assets/images/world_news_2017.jpg"

interface StoryProp{
  item: NewsData
}
export const MoreStoriesCard = ({item}:StoryProp) => {
  const { title,image_url,pubDate} = item
  const posterImage = image_url
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate(`/News/${title}`,{state: {data:item}})
  }

  return (
    <div className="relative px-2 py-4 hover:cursor-pointer" id="morestories_card">
        {/* Image */}
          <div onClick={() => handleNavigate()} className="relative h-[140px] w-inherit" style={ {
                backgroundImage: `url(${image_url ? posterImage : news})`,
                backgroundSize:"cover",
                backgroundRepeat: "no-repeat"
        }}>
        </div>

        <h1 onClick={() => handleNavigate()} className="text-md font-semibold mt-4 line-clamp-3">{title}</h1>

        <span className="text-gray-500 mr-2 self-start bi bi-clock-fill "><p className="text-sm inline ml-2" >{pubDate}</p></span>
    </div>
  )
}
