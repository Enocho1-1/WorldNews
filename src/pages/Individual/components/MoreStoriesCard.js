import news from "../../../assets/images/world_news_2017.jpg"

export const MoreStoriesCard = ({item}) => {
  const { title,image_url,pubDate} = item
  const posterImage = image_url
  return (
    <div className="relative px-2 py-4 hover:cursor-pointer" id="morestories_card">
        {/* Image */}
          <div className="relative h-[140px] w-inherit" style={ {
                backgroundImage: `url(${image_url ? posterImage : news})`,
                backgroundSize:"cover",
                backgroundRepeat: "no-repeat"
        }}>
        </div>

        <h1 className="text-md font-semibold mt-4 line-clamp-3">{title}</h1>

        <span className="text-gray-500 mr-2 self-start bi bi-clock-fill "><p className="text-sm inline ml-2" >{pubDate}</p></span>
    </div>
  )
}
