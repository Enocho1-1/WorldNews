import { useState,useEffect } from "react"
import { userSearchLocation } from "../utility"

export const useSearchLocation = (location) => {
    useEffect(() => { 
        userSearchLocation(location)
    },[location])
  return null
}
