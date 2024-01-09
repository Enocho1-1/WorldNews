
import { CategoryCard } from "../CategoryCard"

export const PrimaryArticles = ({news,colors}) => {
    const {border,left} = colors
  return (
    <aside className="ml-4 flex flex-col py-6 px-2  items-center  max-[1281px]:w-[90%] min-[1281px]:max-w-[590px] ">
        {news.map((item,index) => (
            <CategoryCard key={index} data={item} borderColor={border} left={left}/>
        ))}
    </aside>
  )
}
