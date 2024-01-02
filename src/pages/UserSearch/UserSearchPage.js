import { useSearchParams } from "react-router-dom"

export const UserSearchPage = () => {
  const [params] = useSearchParams()
  const queryWord = params.get("q")
  console.log(queryWord)
  return (
    <div>UserSearchPage</div>
  )
}
