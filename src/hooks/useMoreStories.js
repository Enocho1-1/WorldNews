import { useState,useEffect} from "react"
import { MoreStoriesFetch } from "../utility"

export const useMoreStories = (array) => {
    const [data,setData] = useState([])
    useEffect(() => { MoreStoriesFetch(setData,array)},[array])

  return {data}
}
