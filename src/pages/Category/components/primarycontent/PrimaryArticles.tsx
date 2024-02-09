import { CategoryCard } from "../CategoryCard"
import { PrimaryProps } from "./Primary"

export const PrimaryArticles = ({news,colors}:PrimaryProps) => {
    const {border,left} = colors
  return (
    <aside className="ml-6 flex flex-col py-6 items-center  max-[1180px]:ml-0 max-[1180px]:w-[90%] min-[1180px]:max-[1281px]:w-[60%] min-[1281px]:w-[50%]">
        {news.map((item,index) => (
            <CategoryCard key={index} data={item} borderColor={border} left={left}/>
        ))}
    </aside>
  )
}
