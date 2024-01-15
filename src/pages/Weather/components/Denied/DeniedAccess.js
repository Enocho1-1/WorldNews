import { useState,useEffect } from "react"
import { useSearchLocation } from "../../../../hooks"
import { LocationDetails } from "../Location/LocationDetails"

export const DeniedAccess = () => {
    const [location,setLocation] = useState(null)
    const locations = [{name: "Hungary",code: "hu"},{name: "Cambodia",code: "KH"},{name: "Mexico",code: "MX"},{name: "Fiji",code: "FJ"},{name:"Croatia",code:"HR"},{name:"Congo",code:"CG"},{name:"Ethiopia",code:"ET"},{name:"Mozambique",code:"MZ"},{name:"Cameroon",code:"CM"},{name:"Switzerland",code:"CH"},{name:"Belarus",code:"BY"},{name:"Senegal",code:"SN"},{name:"Chad",code:"TD"},{name:"Bahamas",code:"BS"},{name:"Guinea-Bissau",code:"GW"},{name:"Greece",code:"GR"},{name:"Namibia",code:"NA"},{name:"Japan",code:"JP"},{name:"Georgia",code:"GS"},{name:"Andorra",code:"AD"},{name:"Brazil",code:"BR"},{name:"Tanzania",code:"TZ"},{name:"Ukraine",code:"UA"},{name:"Mongolia",code:"MN"},{name:"Haiti",code:"HT"},{name:"Singapore",code:"SG"},{name:"Barbados",code:"BB"},{name:"Malta",code:"MT"},{name:"Afghanistan",code:"AF"},{name:"Trinidad and Tobago",code:"TT"},"Uganda",{name:"Equatorial Guinea",code:"GQ"}]
    const randomLocation = arr => {
        const randomCountry = arr[Math.floor(Math.random() * arr.length)]
        return randomCountry 
    }

    useEffect(() => {
       setLocation(randomLocation(locations)) 
    },[])

    const value = location != null && location.name


    const {fulfilled,response} = useSearchLocation(value)

  return (
    <div className="relative max-w-inherit w-[100%]">
    { fulfilled && response.status === 200 && <LocationDetails location={value}/>   }
    </div>
  )
}
