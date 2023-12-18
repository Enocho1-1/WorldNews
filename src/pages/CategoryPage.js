import { useTitle } from "../hooks"

export const CategoryPage = ({title}) => {
    useTitle(title)
  return (
    <div className="w-[1200px] bg-red-700 flex">
        <section className="mt-[100px]">
            <h1>Hello World</h1>
        </section>
        
    </div>
  )
}
