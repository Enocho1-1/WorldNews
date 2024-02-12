import { useCurrentWeather } from "../../../../hooks"
import { unixTimeConvertor,weatherIcon } from "../../../../utility"
import { HourlyListItem } from "./HourlyListItem"

export interface HourObject{
    dt:number;
    temp:number;
    weather:any[];
}
export const CurrentWeatherInfo = () => {
    const {condition,hourly,sun,wind,temp,feels} = useCurrentWeather()

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
        }
    ]
   
    const hourlyChart = hourly.slice(0,8)
   

  return (

    <>
        <img src={weatherIcon(condition)} alt={condition} className="absolute top-[30%] right-[15%]  text-[150px] text-gray-400 max-[1150px]:hidden" />
        <aside className=" mt-5 ml-4 flex flex-col">
            <div className="flex max-[1150px]:justify-center">
                {/* Conditon + Description */}
                <span className="flex flex-col">
                    <h1 className="text-5xl text-orange-400 font-light max-[1150px]:text-3xl" >{condition}</h1>
                </span>

                {/* Temp + Feels Like */}
                <span className=" ml-[6.25rem] w-[15.625rem] flex items-center">
                    <h1 className="text-[2.813rem] text-orange-400 font-bold max-[1150px]:text-[2rem] " >{temp}°F</h1>
                    <p className="text-[35px] ml-4 text-gray-700 font-bold max-[1150px]:text-[2rem]" >| {feels}°F</p>
                </span>
            </div>
        
            {/* Metrics */}
            <div className="mt-8 flex max-[1150px]:justify-center">
                { metrics.map((item,index) => (
                    <span key={index} className="flex text-gray-700 text-xl" >
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
