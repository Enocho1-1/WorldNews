import { useSearchParams } from "react-router-dom"

export const UserSearchPage = () => {
  const [params] = useSearchParams()
  const queryWord = params.get("q")
  const responsiveCSS = "max-[720px]:mt-0 min-[720px]:max-[1340px]:mt-[120px] min-[1340px]:mt-[90px]"
  console.log(queryWord)
  return (
    <div className="relative max-w-[1200px] w-[100%] flex font-open_sans">
      <section className={responsiveCSS}>
        user Search
      </section>
    </div>
  )
}
