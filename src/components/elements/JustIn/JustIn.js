import { JustInNews } from "./components/JustInNews"

export const JustIn = () => {
    const date = new Date()
  return (
    <div className="absolute top-[68%] right-0 w-[25rem] h-[15.625rem] flex flex-col max-[720px]:hidden" id="just-in">
        <header className="h-[2.625rem]  bg-gray-800 text-gray-200 text-xl py-4 font-medium flex justify-center items-center">Just In</header>
        <span className="h-[2.188rem] flex justify-center items-center py-2 bg-gray-100 text-gray-200">
            <p className="text-xs font-medium bg-gray-700 p-1 rounded-lg">{date.toDateString()}</p>
        </span>
        <JustInNews />
    </div>
  )
}
