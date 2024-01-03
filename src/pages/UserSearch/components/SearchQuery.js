import { useState } from "react"
import { useNewsSearch } from "../../../hooks/useNewsSearch"
import { SearchQueryCard } from "./SearchQueryCard"
import { NotFound } from "./NotFound"
import { Pagination } from "./Pagination"

export const SearchQuery = ({query}) => {
  const {data} = useNewsSearch(query)
  const [page,setPage] = useState(1)
  const [postperPage] = useState(10)

  const lastIndex = page * postperPage
  const firstIndex = lastIndex - postperPage
  const queryData = data.slice(firstIndex,lastIndex)
  const pageChange = (number) => {
    setPage(number)
  }
  return (
    <div className="my-8 flex flex-col font-open_sans">
      {data.length === 0 ?<NotFound /> :queryData .map((item,index) => (
         <SearchQueryCard key={index} data={item}/>
      ))}
      <Pagination data={data} postperPage={postperPage} pageChange={pageChange}/>
    </div>
  )
}
