

export const CurrentWeatherDescr = ({description}) => {
    const {hourly,current} = description
    const condition = current.current.weather[0].main
  return (
    <aside className="mt-8  h-[250px] flex justify-evenly">
        <span className="flex justify-center">
            <h1 className="text-xl text-orange-400 font-light ">{condition}</h1>
        </span>
    </aside>
  )
}
