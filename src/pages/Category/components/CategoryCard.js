import generic from "../../../assets/images/world_news_2017.jpg"

export const CategoryCard = ({data,border,left}) => {
    const {title,pubDate,image_url,keywords} = data
    const posterImage = image_url
  return (
    <>
        <span className="mt-2 w-fit flex flex-col">
            <header className={`w-inherit flex border-l-[5px] ${left}`}>
            <span className= {`${border} h-[1.5rem]`}>
                <h1>Top News</h1>
            </span>
            </header>

            <div className="search-box flex overflow-hidden">
                <img src={image_url ? posterImage : generic}   className="searchquery-img min-h-[150px] w-[200px] hover:cursor-pointer" alt="news" />
                <aside  className="ml-8 flex flex-col hover:cursor-pointer">
                    <h1 className="text-md max-[700px]:text-md font-semibold">{title}</h1>
                    <div className="mt-4 flex"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-fill self-center mx-2" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/></svg>{pubDate}</div>
                </aside>
            </div>
        </span>
    </>
  )
}
