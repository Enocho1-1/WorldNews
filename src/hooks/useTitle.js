import { useEffect } from "react"

export const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Daily News, hot news and breaking News in the world`;
    },[title])
  return null
}
