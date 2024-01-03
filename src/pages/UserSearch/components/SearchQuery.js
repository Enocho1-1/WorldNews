import { useNewsSearch } from "../../../hooks/useNewsSearch"
import { SearchQueryCard } from "./SearchQueryCard"
import { NotFound } from "./NotFound"

export const SearchQuery = ({query}) => {
  const {data:queryData} = useNewsSearch(query)
  return (
    <div className="mt-8 flex flex-col font-open_sans">
      {queryData.length === 0 ?<NotFound /> :queryData.map((item,index) => (
         <SearchQueryCard key={index} data={item}/>
      ))}
    </div>
  )
}
