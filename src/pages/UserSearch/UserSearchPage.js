import {useTitle} from "../../hooks"
import { useSearchParams } from "react-router-dom"
import { SearchQuery } from "./components/SearchQuery"

export const UserSearchPage = () => {
  const [params] = useSearchParams()
  const queryWord = params.get("q")
  useTitle(`${queryWord}`)
  const responsiveCSS = "max-[720px]:mt-0 min-[720px]:max-[1340px]:mt-[120px] min-[1340px]:mt-[90px]"
  return (
    <div className="relative max-w-[1200px] w-[100%] flex font-open_sans">
      <section className={responsiveCSS} id="user-search">
        <header className="w-inherit flex border-b-2 border-b-dark_orange">
                <span className= "bg-dark_orange h-[2.5rem] w-[1.875rem]"></span>
                <h1 className="font-semibold text-xl ml-4 self-center">Search Results</h1>
        </header>

        <SearchQuery/>
      </section>
    </div>
  )
}
