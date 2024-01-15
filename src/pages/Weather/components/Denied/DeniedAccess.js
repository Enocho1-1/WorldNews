import { useState,useEffect } from "react"
import { useSearchLocation } from "../../../../hooks"

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


    const {main,sys,weather,wind,visibility,fulfilled,response} = useSearchLocation(value)
    console.log(main)

  return (
    <div>

   { fulfilled &&   <img src={`https://flagsapi.com/${location.code}/shiny/64.png`} alt={location} className="h-[150px] w-[150px] ml-2 self-end" />}
    </div>
  )
}
