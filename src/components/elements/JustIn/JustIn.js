import { JustInNews } from "./components/JustInNews"

export const JustIn = ({headerObject}) => {
    const date = new Date()
  return (
    <div id="just-in">
        <header className="h-[2.625rem]  bg-gray-800 text-gray-200 text-xl py-4 font-medium flex justify-center items-center">Just In</header>
        <span className="h-[2.188rem] flex justify-center items-center py-2 bg-gray-100 text-gray-200">
            <p className="text-xs font-medium bg-gray-700 p-1 rounded-lg">{date.toDateString()}</p>
        </span>
        <JustInNews headerObject={headerObject} />
    </div>
  )
}
