/* eslint-disable */
import { useState,useEffect } from "react"
import { UserNewsSearch } from "../utility/DataServices"
import { NewsData } from "./useJustInNews"

export const useNewsSearch = (query:string | null) => {
    const [data,setData] = useState<NewsData[]>([])
    useEffect(() => { UserNewsSearch(query,setData)},[query])

  return {data}
}
