import { useState,useEffect} from "react"
import { MoreStoriesFetch } from "../utility"

export const useMoreStories = (array,id) => {
    const [data,setData] = useState([])
    useEffect(() => { MoreStoriesFetch(setData,array,id)},[array])

  return {data}
}
