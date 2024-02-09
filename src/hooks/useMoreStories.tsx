import { useState,useEffect} from "react"
import { MoreStoriesFetch } from "../utility"
import { NewsData } from "./useJustInNews"


export const useMoreStories = (array:string[],id:number) => {
    const [data,setData] = useState<NewsData[]>([])
    useEffect(() => { MoreStoriesFetch(setData,array,id)},[array,id])

  return {data}
}
