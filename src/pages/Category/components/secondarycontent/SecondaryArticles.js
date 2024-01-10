import { CategoryCard } from "../CategoryCard"

export const SecondaryArticles = ({news,colors}) => {
    const {border,left} = colors
  return (
    <aside className="px-2 grid grid-cols-twocols gap-y-2 gap-x-4">
         {news.map((item,index) => (
            <CategoryCard key={index} data={item} borderColor={border} left={left}/>
        ))}
    </aside>
  )
}
