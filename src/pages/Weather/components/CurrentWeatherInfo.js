

export const CurrentWeatherInfo = ({condition,description,wind,temp,feels}) => {
  return (
    <aside className="relative mt-5 ml-4 flex">
        <span className="px-2 flex flex-col">
            <h1 className="text-6xl text-orange-400 font-light ">{condition}</h1>
            <p className="mt-2 text-2xl text-gray-700">{description}</p>
        </span>

        <span className=" ml-[100px] w-[250px] flex items-center">
        <h1 className="text-[45px] text-orange-400 font-bold">{temp}°F</h1>
        <p className="text-[35px] ml-4 text-gray-700 font-bold ">| {feels}°F</p>
        </span>
    </aside>
  )
}
