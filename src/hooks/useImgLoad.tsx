import { useState,useEffect } from "react"

export const useImgLoad = (src:string) => {
    const [imgLoad,setImgLoad] = useState(false)

    useEffect(() => {
        let img = new Image()
        img.onload = () => {
            setImgLoad(true)
        }
        img.src = src;
    },[src])
  return {imgLoad}
}
