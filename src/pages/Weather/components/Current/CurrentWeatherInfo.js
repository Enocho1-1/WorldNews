import { useCurrentWeather } from "../../../../hooks"
import { unixTimeConvertor } from "../../../../utility"
import { HourlyListItem } from "../HourlyListItem"

export const CurrentWeatherInfo = () => {
    const {condition,hourly,description,sun,wind,rain,temp,feels} = useCurrentWeather()

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
    <aside className=" mt-5 ml-4 flex flex-col">
        <div className="flex">
             {/* Conditon + Description */}
            <span className="flex flex-col">
                <h1 className="text-5xl text-orange-400 font-light " data-testid = "weather-condition">{condition}</h1>
                <p className="mt-2 text-2xl text-gray-700" data-testid = "weather-descr">{description}</p>
            </span>

            {/* Temp + Feels Like */}
            <span className=" ml-[6.25rem] w-[15.625rem] flex items-center">
                <h1 className="text-[2.813rem] text-orange-400 font-bold" data-testid = "temp">{temp}°F</h1>
                <p className="text-[35px] ml-4 text-gray-700 font-bold " data-testid = "real-feel">| {feels}°F</p>
            </span>
        </div>
       
        {/* Metrics */}
        <div className="mt-8 flex">
            { metrics.map((item,index) => (
                <span key={index} className="flex text-gray-700 text-xl" data-testid = "metrics">
                    <p className={`mx-4 ${item.icon}`}></p>
                    <p className="mx-4 font-semibold">{item.info} {item.metric}</p>
                </span>
            ))}
        </div>

        {/* Hourly Chart Display */}
        <ul className="mt-10 mr-8 grid grid-cols-eightcols">
            {hourlyChart.map((item,index) => (
                <HourlyListItem key={index} item={item}/>
            ))}
        </ul>
    </aside>
  )
}
