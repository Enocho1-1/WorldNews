import {useLocation} from "react-router-dom"
import {useTitle} from "../../hooks"
import {BannerImage,SocialIcons,NewsContent} from "./components"
import generic from "../../assets/images/world_news_2017.jpg"
import "./Individual.css"

export interface StateData{
  pubDate:string | null;
  description: string | null;
  content: string | null;
  keywords: string[] | null;
  creator: string[] | null;
  id: number
}
export const IndividualNewsPage = () => {
    const {state} = useLocation()
    const {title,image_url,pubDate,description,content,keywords,creator,article_id} = state.data
    useTitle(title)
    const responsiveCSS = "max-[769px]:mt-0 min-[769px]:max-[1340px]:mt-[120px] min-[1340px]:mt-[90px]"
    const Content:StateData = {pubDate:pubDate,description:description,content:content,keywords:keywords,creator:creator,id:article_id}
    const posterImage = image_url === null || image_url.includes("gif") || image_url.includes("Linkedin") || image_url.includes("LinkedIn") ? generic : image_url


  return (
    <div className="relative box-shadow max-w-[1200px] z-[1] w-[100%] flex font-open_sans">
        <section className={responsiveCSS}>

            <header className="mt-4 px-2">
             <h1 className="font-semibold text-2xl max-[1069px]:text-3xl">{title}</h1>
            </header>

            {/* News Sections */}
            <aside className="mt-4 flex flex-col">
              <BannerImage image={posterImage}/>
             
              <div className="relative flex">
                <SocialIcons/>
                <NewsContent data={Content} />
              </div>

            </aside>

        </section>
    </div>
  )
}
