import { useEffect,useState } from "react"
import { JustInNews } from "../utility"
export const useJustInNews = () => {

  const [data,setData] = useState([])
  
  useEffect(() => {JustInNews(setData)},[])
  return {data}
}
