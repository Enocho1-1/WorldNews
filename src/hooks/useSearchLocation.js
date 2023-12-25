import { useState,useEffect } from "react"
import { userSearchLocation } from "../utility"

export const useSearchLocation = (location) => {
    const [data,setData] = useState([])
    useEffect(() => { 
        userSearchLocation(location,setData)
    },[location])

  return {data}
}
