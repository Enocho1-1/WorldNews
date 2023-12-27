import { useCurrentWeather } from "../../../../hooks"
import { unixTimeConvertor,weatherIcon } from "../../../../utility"
import { HourlyListItem } from "../HourlyListItem"

export const CurrentWeatherInfo = () => {
    const {condition,hourly,sun,wind,rain,temp,feels} = useCurrentWeather()

    const metrics = [
        {
            info:`Sunrise - ${unixTimeConvertor(sun)}`,
            icon: "bi bi-brightness-alt-high",
            metric:""
        },
        {
            info: wind,
            icon:"bi bi-wind",
            metric: "km"
        },
        {
            info: rain,
            icon:"bi bi-cloud-drizzle",
            metric: "%"
        }
    ]
   
    const hourlyChart = hourly.slice(0,8)
   

  return (

    <>
        <span className={`absolute top-[25%] right-[15%] ${weatherIcon(condition)} text-[150px] text-gray-400 max-[1150px]:hidden`}></span>
        <aside className=" mt-5 ml-4 flex flex-col">
            <div className="flex max-[1150px]:justify-center">
                {/* Conditon + Description */}
                <span className="flex flex-col">
                    <h1 className="text-5xl text-orange-400 font-light max-[1150px]:text-3xl" data-testid = "weather-condition">{condition}</h1>
                </span>

                {/* Temp + Feels Like */}
                <span className=" ml-[6.25rem] w-[15.625rem] flex items-center">
                    <h1 className="text-[2.813rem] text-orange-400 font-bold max-[1150px]:text-[2rem] " data-testid = "temp">{temp}°F</h1>
                    <p className="text-[35px] ml-4 text-gray-700 font-bold max-[1150px]:text-[2rem]" data-testid = "real-feel">| {feels}°F</p>
                </span>
            </div>
        
            {/* Metrics */}
            <div className="mt-8 flex max-[1150px]:justify-center">
                { metrics.map((item,index) => (
                    <span key={index} className="flex text-gray-700 text-xl" data-testid = "metrics">
                        <p className={`mx-4 ${item.icon}`}></p>
                        <p className="mx-4 font-semibold">{item.info} {item.metric}</p>
                    </span>
                ))}
            </div>

            {/* Hourly Chart Display */}
            <ul className="mt-10 mr-8 grid grid-cols-eightcols max-[1150px]:grid-cols-fourcols max-[1150px]:gap-y-4">
                {hourlyChart.map((item,index) => (
                    <HourlyListItem key={index} item={item}/>
                ))}
            </ul>
        </aside>
    </>
  )
}
