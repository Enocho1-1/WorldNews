import { useState,useEffect } from "react"
import { CategoryNews } from "../utility"

export const useCategoryNews = (api) => {
    const [data,setData] = useState([])

    useEffect(() => {CategoryNews(api,setData)},[api])

  return {data}
}
