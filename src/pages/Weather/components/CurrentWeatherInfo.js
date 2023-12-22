import { useCurrentWeather } from "../../../hooks"

export const CurrentWeatherInfo = () => {
    const {condition,description,sun,wind,rain,temp,feels} = useCurrentWeather()
    const obj = [
        {
            info:`Sunrise - ${sun}`,
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
                <h1 className="text-6xl text-orange-400 font-light ">{condition}</h1>
                <p className="mt-2 text-2xl text-gray-700">{description}</p>
            </span>

            {/* Temp + Feels Like */}
            <span className=" ml-[100px] w-[250px] flex items-center">
                <h1 className="text-[45px] text-orange-400 font-bold">{temp}°F</h1>
                <p className="text-[35px] ml-4 text-gray-700 font-bold ">| {feels}°F</p>
            </span>
        </div>
       

        <div className="mt-8 flex">
            { obj.map((item,index) => (
                <span key={index} className="flex text-gray-700 text-xl">
                    <p className={`mx-4 ${item.icon}`}></p>
                    <p className="mx-4 font-semibold">{item.info} {item.metric}</p>
                </span>
            ))}
        </div>
    </aside>
  )
}
