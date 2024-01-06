/* eslint-disable */
import { useState,useEffect } from "react"
import { UserNewsSearch } from "../utility/DataServices"

export const useNewsSearch = (query) => {
    const [data,setData] = useState([])
    useEffect(() => { UserNewsSearch(query,setData)},[query])

  return {data}
}
