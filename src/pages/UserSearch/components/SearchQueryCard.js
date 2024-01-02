import news from "../../../assets/images/world_news_2017.jpg"

export const SearchQueryCard = () => {
  return (
    <>
        <span className="mt-8 w-[90%] flex flex-col">
            <header className="w-inherit flex border-l-[5px] border-l-dark_orange">
              <span className= "bg-dark_orange h-[1.5rem]"></span>
              <h1 className="font-semibold text-xl ml-4 self-center">Ghana</h1>
            </header>

            <div className="search-box flex overflow-hidden">
                <img src={news}  className="searchquery-img h-[200px] w-[310px]" alt="news" />
                <aside className="ml-10 flex flex-col">
                    <h1 className="text-lg font-semibold">Lorem ipsum dolor sit amet.</h1>
                    <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione doloribus eligendi nostrum incidunt commodi nam debitis cum dolore exercitationem ut.</p>
                    <div className="mt-4 flex"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-fill self-center mx-2" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/></svg>1/2/23</div>
                </aside>
            </div>
        </span>
    </>
  )
}
