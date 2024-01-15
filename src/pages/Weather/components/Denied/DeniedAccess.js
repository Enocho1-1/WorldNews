import { useState,useEffect } from "react"
import { useSearchLocation } from "../../../../hooks"

export const DeniedAccess = () => {
    const [location,setLocation] = useState(null)
    const locations = ["Hungary","Cambodia","Mexico","Fiji","Croatia","Congo","Ethiopia","Mozambique","Cameroon","Switzerland","Belarus","Senegal","Chad","Bahamas","Guinea-Bissau","Greece","Namibia","Japan","Georgia","Saint Vincent and the Grenadines","Andorra","Brazil","Tanzania","Ukraine","Eswatini","Mongolia","Haiti","Singapore","Barbados","Malta","Afghanistan","Trinidad and Tobago","Uganda","Equatorial Guinea"]
    const randomLocation = arr => {
        const randomCountry = arr[Math.floor(Math.random() * arr.length)]
        return randomCountry 
    }

  return (
    <div>DeniedAccess</div>
  )
}
