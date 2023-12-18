

export const HeaderBottom = () => {
  return (
    <div className="h-[50px] w-[100%] flex font-open_sans">
      {/* Category Topic */}
      <span className="h-inherit w-[35%] bg-gray-900 flex justify-center items-center border-y-2 border-red-600">
        <h1 className="text-red-600 text-2xl font-semibold">NEWS</h1>
      </span>
      {/* Just-In News */}
      <button className="h-inherit w-[65%] flex justify-start items-center border-y-2 border-red-600">
        <h1 className="ml-4 text-xl text-gray-600 font-semibold hover:text-black ">JUST IN</h1>
      </button>
    </div>
  )
}
