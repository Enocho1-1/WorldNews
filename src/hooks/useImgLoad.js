import { useState,useEffect } from "react"

export const useImgLoad = (src) => {
    const [imgLoad,setImgLoad] = useState(false)

    useEffect(() => {
        let img = new Image()
        img.onload = () => {
            setImgLoad(true)
        }
        img.src = src;
    },[])
  return {imgLoad}
}
