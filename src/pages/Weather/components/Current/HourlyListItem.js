import { weatherIcon } from "../../../../utility"

export const HourlyListItem = ({item}) => {
    const {dt,temp,weather} = item
    const Temp = Math.ceil(temp)
    const date = new Date(dt * 1000)
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const formattedTime = hours + ':' + minutes.substr(-2)
  
  return (
    <>
        <li className="border-x-[1px] border-gray-200 flex flex-col items-center">
                <span className=" flex flex-col text-gray-400 ">
                    <img src={weatherIcon(weather[0].main)} title={weather[0].main} alt={weather[0].main}  className=" h-8 w-8 text-xl  self-center"/>
                    <p className="text-lg self-center">{Temp}°F</p>
                </span>
                <span className=" mt-6 flex flex-col text-gray-400 ">
                    <p className="text-xl bi bi-dot self-center"></p>
                    <p className="text-lg text-gray-800 font-semibold self-center">{formattedTime}</p>
                </span>
        </li>
    </>
  )
}
