import news from "../../../assets/news.png"

export const MoreStoriesCard = () => {
  // const { title,image_url,pubDate} = filteredArticles
  return (
    <div className="relative px-2 py-4 hover:cursor-pointer" id="morestories_card">
        {/* Image */}
          <div className="relative h-[140px] w-inherit" style={ {
                backgroundImage: `url(${news})`,
                backgroundSize:"cover",
                backgroundRepeat: "no-repeat"
        }}>
        </div>

        <h1 className="text-md font-semibold mt-4 line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, tempora.</h1>

        <span className="text-gray-500 mr-2 self-start bi bi-clock-fill "><p className="text-sm inline ml-2" >1/1/2023</p></span>
    </div>
  )
}
