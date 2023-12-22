import { useCurrentWeather } from "../../../hooks"

export const CurrentWeatherInfo = () => {
    const {condition,hourly,description,sun,wind,rain,temp,feels} = useCurrentWeather()
    
    // Unix TimeStamp Conversion
    const unix_timestamp = sun
    const date = new Date(unix_timestamp * 1000)
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    // console.log(hourly)
    const obj = [
        {
            info:`Sunrise - ${formattedTime}`,
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
  return (
    <aside className=" mt-5 ml-4 flex flex-col">
        <div className="flex">
             {/* Conditon + Description */}
            <span className="px-2 flex flex-col">
                <h1 className="text-6xl text-orange-400 font-light " data-testid = "weather-condition">{condition}</h1>
                <p className="mt-2 text-2xl text-gray-700" data-testid = "weather-descr">{description}</p>
            </span>

            {/* Temp + Feels Like */}
            <span className=" ml-[100px] w-[250px] flex items-center">
                <h1 className="text-[45px] text-orange-400 font-bold" data-testid = "temp">{temp}°F</h1>
                <p className="text-[35px] ml-4 text-gray-700 font-bold " data-testid = "real-feel">| {feels}°F</p>
            </span>
        </div>
       

        <div className="mt-8 flex">
            { obj.map((item,index) => (
                <span key={index} className="flex text-gray-700 text-xl" data-testid = "metrics">
                    <p className={`mx-4 ${item.icon}`}></p>
                    <p className="mx-4 font-semibold">{item.info} {item.metric}</p>
                </span>
            ))}
        </div>
    </aside>
  )
}
