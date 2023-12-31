import { useSearchLocation } from "../../../../hooks"
import { unixTimeConvertor,weatherIcon } from "../../../../utility"

export const LocationDetails = ({location}) => {
    const {main,sys,weather,wind,visibility} = useSearchLocation(location)
    const { feels_like,humidity,pressure,temp} = main
    const { country,sunrise} = sys
    const {main: weather_main,description} = weather
    const {speed} = wind
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
            name: "Visibility",
            value: visibility
        }
    ]
  

  return (
    <>
         <header className="mt-8 flex">
              <span className="flex flex-col mx-4">
                <h1 className="font-roboto text-gray-800 text-5xl flex max-[1150px]:text-3xl">{location.toUpperCase()},{country} <img src={`https://flagsapi.com/${country}/shiny/64.png`} alt={country} className="h-10 w-10 ml-2 self-end" /></h1>
                <p className="text-3xl text-orange-400 font-light max-[1150px]:text-lg">{weather_main}</p>
                <p className="mt-2 text-2xl text-gray-700 max-[1150px]:text-lg">{description}</p>
              </span>
              

                <span className=" ml-[6.25rem] flex max-[490px]:flex-col max-[490px]:ml-[4rem]">
                  <h1 className="text-[2.813rem] text-orange-400 font-bold max-[1150px]:text-[2rem]" data-testid = "temp">{Math.ceil(temp)}°F</h1>
                  <p className="text-[2.188rem] ml-4 text-gray-700 font-bold  max-[1150px]:text-[1.5rem] max-[480px]:hidden" data-testid = "real-feel">| {Math.ceil(feels_like)}°F</p>
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

            <div className="mt-5 h-[250px]  flex max-[1150px]:justify-center" id="location-overview">
                { overviewObj.map((item,index) => (
                    <span key={index} className="mx-4 py-4 h-[150px] w-[175px] flex flex-col items-center">
                        <h1 className="font-semibold text-lg">{item.name}</h1>
                        <p className="text-xl font-semibold mt-4 ">{item.value}</p>
                    </span>
                ))}
            </div>

            <img src={weatherIcon(weather_main)} alt={weather_main} className="absolute top-[15%] right-[15%] text-[150px] text-gray-400 max-[1150px]:hidden"/>
    </>
  )
}
