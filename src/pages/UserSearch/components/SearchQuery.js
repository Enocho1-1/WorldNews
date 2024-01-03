import { useNewsSearch } from "../../../hooks/useNewsSearch"
import { SearchQueryCard } from "./SearchQueryCard"

export const SearchQuery = ({query}) => {
  const {data:queryData} = useNewsSearch(query)
  return (
    <div className="mt-8 flex flex-col font-open_sans">
      <SearchQueryCard/>
    </div>
  )
}
