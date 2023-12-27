import { useSearchLocation } from "../../../../hooks"
import { unixTimeConvertor } from "../../../../utility"

export const LocationDetails = ({location}) => {
    const {main,sys,weather,wind,visibility} = useSearchLocation(location)
    const { feels_like,humidity,pressure,temp} = main
    const { country,sunrise} = sys
    const {main: weather_main,description} = weather
    const {speed,deg} = wind
    const metrics = [
        {
            info:`Sunrise - ${unixTimeConvertor(sunrise)}`,
            icon: "bi bi-brightness-alt-high",
            metric:""
        },
        {
            info: Math.ceil(speed),
            icon:"bi bi-wind",
            metric: "km"
        }
    ]

    const overviewObj = [
        {
            name:"Humidity",
            value: humidity
        },
        {
            name: "Pressure",
            value: pressure
        },
        {
            name: "Wind Direction",
            value: deg
        }
    ]
  
  return (
    <>
         <header className="mt-8 flex">
              <span className="flex flex-col mx-4">
                <h1 className="font-roboto text-gray-800 text-5xl">{location.toUpperCase()},{country}</h1>
                <p className="text-3xl text-orange-400 font-light">{weather_main}</p>
                <p className="mt-2 text-2xl text-gray-700">{description}</p>
              </span>
              

                <span className=" ml-[6.25rem] flex">
                  <h1 className="text-[2.813rem] text-orange-400 font-bold" data-testid = "temp">{Math.ceil(temp)}°F</h1>
                  <p className="text-[35px] ml-4 text-gray-700 font-bold " data-testid = "real-feel">| {Math.ceil(feels_like)}°F</p>
                </span>
            </header>

      
            <div className="mt-8 flex">
                { metrics.map((item,index) => (
                    <span key={index} className="flex text-gray-700 text-xl" data-testid = "metrics">
                        <p className={`mx-4 ${item.icon}`}></p>
                        <p className="mx-4 font-semibold">{item.info} {item.metric}</p>
                    </span>
                ))}
            </div> 

            <div className="mt-5 h-[250px] w-[85%] flex" id="location-overview">
                { overviewObj.map((item,index) => (
                    <span key={index} className="mx-4 py-4 h-[150px] w-[175px] flex flex-col items-center">
                        <h1 className="font-semibold text-lg">{item.name}</h1>
                        <p className="text-md mt-4 ">{item.value}</p>
                    </span>
                ))}
                
            </div>
    </>
  )
}
