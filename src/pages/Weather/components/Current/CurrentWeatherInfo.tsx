import { useCurrentWeather } from "../../../../hooks"
import { unixTimeConvertor,weatherIcon } from "../../../../utility"
import { HourlyListItem } from "./HourlyListItem"

export interface HourObject{
    dt:number;
    temp:number;
    weather:{id:number,main:string,description:string}[];
}

export const CurrentWeatherInfo = () => {
    const {main} = useCurrentWeather()

    let hourly = main?.hourly !== undefined ? main?.hourly.slice(0,8) : []
    let current = main?.current
    let condition = current?.weather[0]?.main !== undefined ? current?.weather[0]?.main : 'clear'
    let sunrise = main?.daily[0]?.sunrise !== undefined ? main?.daily[0]?.sunrise : 1
    let wind = current?.wind_speed !== undefined ? Math.ceil(current?.wind_speed) : 1
    let temp = current?.temp !== undefined ? Math.ceil(current?.temp) : 1
    let feels = current?.feels_like !== undefined ? Math.ceil(current?.feels_like) : 1


    const metricsArr = [
        {
            info:`Sunrise - ${unixTimeConvertor(sunrise)}`,
            icon: "bi bi-brightness-alt-high",
            metric:""
        },
        {
            info: wind,
            icon:"bi bi-wind",
            metric: "km"
        }
    ]
   
  return (

    <>
         <img src={weatherIcon(condition)} alt={condition} className="absolute top-[30%] right-[15%]  text-[150px] text-gray-400 max-[1150px]:hidden" />
        <aside className=" mt-5 ml-4 flex flex-col">
            <div className="flex max-[1150px]:justify-center">
              
                <span className="flex flex-col">
                    <h1 className="text-5xl text-orange-400 font-light max-[1150px]:text-3xl" >{condition}</h1>
                </span>

             
                <span className=" ml-[6.25rem] w-fit flex items-center">
                    <h1 className="text-[2.813rem] text-orange-400 font-bold max-[1150px]:text-[2rem] " >{temp}°F</h1>
                    <p className="text-[35px] ml-4 text-gray-700 font-bold max-[1150px]:text-[2rem]" >| {feels}°F</p>
                </span>
            </div>
        
        
            <div className="mt-8 flex max-[1150px]:justify-center">
                { metricsArr.map((item,index) => (
                    <span key={index} className="flex text-gray-700 text-xl" >
                        <p className={`mx-4 ${item.icon}`}></p>
                        <p className="mx-4 font-semibold">{item.info} {item.metric}</p>
                    </span>
                ))}
            </div>

           
            <ul className="mt-10 mr-8 grid grid-cols-eightcols max-[1150px]:grid-cols-fourcols max-[1150px]:gap-y-4">
                {hourly.map((item,index) => (
                    <HourlyListItem key={index} item={item}/>
                ))}
            </ul>
        </aside> 
    </>
  )
}
