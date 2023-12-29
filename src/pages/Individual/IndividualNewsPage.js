import { useLocation } from "react-router-dom"


export const IndividualNewsPage = () => {
    const {state} = useLocation()
    const {title,image_url,pubDate,description,content,link,keywords} = state.data
    const responsiveCSS = "max-[720px]:mt-0 min-[720px]:max-[1340px]:mt-[120px] min-[1340px]:mt-[90px]"
    const socials = [
      {
        name:"share",
        icon:"bi bi-share-fill"
      },
      {
        name:"facebook",
        icon:"bi bi-facebook"
      },
      {
        name:"x",
        icon:"bi bi-twitter-x"
      },
      {
        name:"email",
        icon:"bi bi-envelope"
      },
    ]

  return (
    <div className="relative max-w-[1200px] w-[100%] flex font-open_sans">
        <section className={responsiveCSS}>

            <header className="mt-4">
             <h1 className="font-semibold text-3xl">{title}</h1>
            </header>

            {/* Content Sections */}
            <aside className="mt-4 flex flex-col">

              <div className="relative flex flex-col">
                <img src={image_url} className="h-[600px] w-inherit" alt="new-img"/>
                <span className="mt-1 flex justify-end">
                  <p className="text-xs">Copyright © worldnews/Copyright 2023 The AP. All rights reserved.</p>
                </span>
              </div>
             
              <div className="relative flex">
                <span className="h-[200px] w-[150px] flex flex-col items-center">
                  {socials.map((item,index) => (
                    <span key={index}  className={`${item.icon} my-2 p-2 text-xl text-gray-500 hover:bg-dark_orange hover:cursor-pointer`}/>
                  ))}
                </span>

                <span className="mt-8 ml-6 flex flex-col">
                  <p className="text-md text-gray-500 flex"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-fill self-center mr-2" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/></svg>{pubDate}</p>
                </span>

              </div>

            </aside>

        </section>
    </div>
  )
}
