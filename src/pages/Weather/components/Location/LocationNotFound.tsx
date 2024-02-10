import { Link } from "react-router-dom"

interface NotFoundProp{
  value:string | null
}
export const LocationNotFound = ({value}:NotFoundProp) => {
  return (
    <div className="h-[500px] flex justify-center items-center">
        <section className="mt-10 flex flex-col">
            <h1 className='text-4xl font-roboto font-bold'><i>{value}</i> was not found 😰</h1>
            <p className="text-lg font-open_sans">Please checking spelling and try again !</p>
           <Link to="/weather/current-location" className="mt-4 h-[50px] w-[100px] rounded-md bg-dark_orange p-2 flex justify-evenly self-center items-center text-white font-semibold hover:bg-orange_red "><span className="bi bi-arrow-bar-left text-xl"></span>Back</Link>
        </section>
     
    </div>
  )
}
