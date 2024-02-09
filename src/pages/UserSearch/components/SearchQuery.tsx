import { useState } from "react"
import { useNewsSearch } from "../../../hooks/useNewsSearch"
import { NotFound } from "./NotFound"
import { SearchQueryCard } from "./SearchQueryCard"
import { Pagination } from "./Pagination"

interface QueryProp{
  query:string | null;
}
export const SearchQuery = ({query}:QueryProp) => {
  const {data} = useNewsSearch(query)
  const [page,setPage] = useState(1)
  const [postperPage] = useState(10)

  const lastIndex = page * postperPage
  const firstIndex = lastIndex - postperPage
  const queryData = data.slice(firstIndex,lastIndex)
  const pageChange = (number:number) => {
    setPage(number)
  }
  return (
    <div className="my-8 px-8 flex flex-col max-[769px]:items-center font-open_sans">
      {!data.length ? <NotFound/> : queryData.map((item,index) => (
         <SearchQueryCard key={index} data={item}/>
      )) }
   
      <Pagination data={data.length} postperPage={postperPage} pageChange={pageChange}/>
    </div>
  )
}
