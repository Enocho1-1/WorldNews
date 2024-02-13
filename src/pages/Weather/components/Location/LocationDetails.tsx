import { useSearchLocation } from "../../../../hooks"
import { unixTimeConvertor,weatherIcon } from "../../../../utility"

interface  Props{
    location:any;
}

export const LocationDetails = ({location}:Props) => {
    const {main} = useSearchLocation(location)

    let country = main?.sys?.country
    let sunrise = main?.sys?.sunrise
    let weather_main = main?.weather !== undefined ? main?.weather : []
    let wind_speed =  main?.wind?.speed !== undefined ? main?.wind?.speed : 1
    let temperature = main?.main?.temp !== undefined ? main?.main?.temp : 1
    let feelTemperature = main?.main?.feels_like !== undefined ? main?.main?.feels_like : 1
    let humidity = main?.main?.humidity
    let pressure = main?.main?.pressure
    let visibility = main?.visibility

    const metricsArr = [
        {
            info:`Sunrise - ${unixTimeConvertor(sunrise)}`,
            icon: "bi bi-brightness-alt-high",
            metric:""
        },
        {
            info: Math.ceil(wind_speed),
            icon:"bi bi-wind",
            metric: "km"
        }
    ]

    
    const overviewArr = [
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
                <h1 className="font-roboto text-gray-800 text-3xl max-[480px]:text-xl flex max-[1150px]:text-3xl">{location.toUpperCase()},{country} <img src={`https://flagsapi.com/${country}/shiny/64.png`} alt={country} className="h-10 w-10 max-[480px]:h-8 max-[480px]:w-8 ml-2 self-end" /></h1>
                {weather_main.map((item,index) => (
                    <div key={index}>
                        <p className="text-3xl text-orange-400 font-light max-[1150px]:text-lg">{item.main}</p>
                        <p className="mt-2 text-2xl text-gray-700 max-[1150px]:text-lg">{item.description}</p>
                    </div>
              
                ))}
              </span>
            
                <span className=" ml-[6.25rem] flex max-[490px]:flex-col max-[490px]:ml-[4rem]">
                    <h1 className="text-[2.813rem] text-orange-400 font-bold max-[1150px]:text-[2rem]" data-testid = "temp">{Math.ceil(temperature)}°F</h1>
                    <p className="text-[2.188rem] ml-4 text-gray-700 font-bold  max-[1150px]:text-[1.5rem] max-[480px]:hidden" data-testid = "real-feel">| {Math.ceil(feelTemperature)}°F</p>
                </span>
            </header>

      
            <div className="mt-8 flex">
                { metricsArr.map((item,index) => (
                    <span key={index} className="flex text-gray-700 text-xl" data-testid = "metrics">
                        <p className={`mx-4 ${item.icon}`}></p>
                        <p className="mx-4 font-semibold">{item.info} {item.metric}</p>
                    </span>
                ))}
            </div> 

            <div className="mt-5 h-[250px]  flex max-[1150px]:justify-center" id="location-overview">
                { overviewArr.map((item,index) => (
                    <span key={index} className="mx-4 py-4 h-[150px] w-[175px] flex flex-col items-center">
                        <h1 className="font-semibold text-lg">{item.name}</h1>
                        <p className="text-xl font-semibold mt-4 ">{item.value}</p>
                    </span>
                ))}
            </div>

            {weather_main.map((item,index) => (
                 <img key={index} src={weatherIcon(item.main)} alt={item.main} className="absolute top-[15%] right-[15%] text-[150px] text-gray-400 max-[1150px]:hidden"/> 
            ))}
           
    </>
  )
}
