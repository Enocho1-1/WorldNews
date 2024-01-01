import news from "../../../assets/news.png"

export const MoreStoriesCard = () => {
  return (
    <div className="relative px-2 hover:cursor-pointer" id="morestories_card">
        {/* Image */}
          <div className="relative h-[140px] w-[250px]" style={ {
                backgroundImage: `url(${news})`,
                backgroundSize:"cover",
                backgroundRepeat: "no-repeat"
        }}>
            {/* <span className="absolute bottom-0 left-0 border-l-4 flex justify-center items-center  text-md truncate ... border-dark_orange bg-white w-[100px] h-[30px]">News</span>  */}
        </div>

        <h1 className="text-md font-semibold mt-4 line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, tempora.</h1>

        <span className="text-gray-500 mr-2 self-start bi bi-clock-fill "><p className="text-sm inline ml-2" >1/1/2023</p></span>
    </div>
  )
}
