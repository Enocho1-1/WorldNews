import { weekdays } from "../../../../components/DataStructures/FooterArrays";

export const CurrentDayInfo = () => {
    const date = new Date()
    const dateWithoutSecond = new Date();
    const formatted = dateWithoutSecond.toLocaleTimeString([], {
      timeStyle: 'short'
    });

    const day = weekdays[date.getUTCDay()]
    const todayDate = date.toLocaleDateString()
  return (
    <aside className="w-[100%] mt-[15px] flex justify-start max-[1150px]:justify-center">
        <h1 className="font-roboto text-4xl mx-4 max-[1150px]:mx-2 max-[1150px]:text-2xl">{day}</h1>
        <p className="text-xl font-semibold self-center mx-4 max-[1150px]:mx-2 max-[1150px]:text-base">{todayDate}</p>
        <p className="text-2xl font-semibold self-center mx-4 max-[1150px]:mx-2 max-[1150px]:text-base">{formatted}</p>
    </aside>
  )
}
