import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export const Scrolltop = () => {
    const location = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
        console.log("text")
    },[location])
  return null
}
