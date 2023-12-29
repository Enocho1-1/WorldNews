import { useLocation } from "react-router-dom"
import {useTitle} from "../../hooks"
import { BannerImage,SocialIcons,NewsContent } from "./components"


export const IndividualNewsPage = () => {
    const {state} = useLocation()
    const {title,image_url,pubDate,description,content,link,keywords,category,country,creator} = state.data
    useTitle(title)
    const responsiveCSS = "max-[720px]:mt-0 min-[720px]:max-[1340px]:mt-[120px] min-[1340px]:mt-[90px]"
    const contentArr = [pubDate,description,content,link,keywords,category,country,creator]
  return (
    <div className="relative max-w-[1200px] w-[100%] flex font-open_sans">
        <section className={responsiveCSS}>

            <header className="mt-4 px-2">
             <h1 className="font-semibold text-3xl">{title}</h1>
            </header>

            {/* News Sections */}
            <aside className="mt-4 flex flex-col">
              <BannerImage image={image_url} country={country}/>
             
              <div className="relative flex">
                <SocialIcons/>
                <NewsContent data={contentArr} />
              </div>

            </aside>

        </section>
    </div>
  )
}
