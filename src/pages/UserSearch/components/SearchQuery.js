import { useState } from "react"
import { useNewsSearch } from "../../../hooks/useNewsSearch"
import { SearchQueryCard } from "./SearchQueryCard"
import { Pagination } from "./Pagination"
import {GifLoader} from "../../../components"

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
    <div className="my-8 px-8 flex flex-col max-[769px]:items-center font-open_sans">
      {data.length === 0 ? <GifLoader height="500px" /> : queryData.map((item,index) => (
         <SearchQueryCard key={index} data={item}/>
      )) }
      <Pagination data={data} postperPage={postperPage} pageChange={pageChange}/>
    </div>
  )
}
