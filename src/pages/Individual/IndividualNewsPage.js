import { useLocation } from "react-router-dom"

export const IndividualNewsPage = () => {
    const {state} = useLocation()
    console.log(state.data)
    const responsiveCSS = "max-[720px]:mt-0 min-[720px]:max-[1340px]:mt-[120px] min-[1340px]:mt-[90px]"
  return (
    <div className="relative max-w-[1200px] w-[100%] flex font-open_sans">
        <section className={responsiveCSS}>
            <h1>Individual page</h1>
        </section>
    </div>
  )
}
