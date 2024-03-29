import { CategoryCard } from "../CategoryCard"
import { PrimaryProps } from "../primarycontent/Primary"

export const SecondaryArticles = ({news,colors}:PrimaryProps) => {
    const {border,left} = colors
  return (
    <aside className="px-4 grid grid-cols-twocols gap-y-2 gap-x-4 max-lg:grid-cols-1">
         {news.map((item,index) => (
            <CategoryCard key={index} data={item} borderColor={border} left={left}/>
        ))}
    </aside>
  )
}
