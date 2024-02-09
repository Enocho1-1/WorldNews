import { useState,useEffect } from "react"
import { CategoryNews } from "../utility"
import { NewsData } from "./useJustInNews"

export const useCategoryNews = (api:string) => {
    const [data,setData] = useState<NewsData[]>([])

    useEffect(() => {CategoryNews(api,setData)},[api])

  return {data}
}
