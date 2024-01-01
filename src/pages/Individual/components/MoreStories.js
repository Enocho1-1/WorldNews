import { useMoreStories } from "../../../hooks/useMoreStories"
import { MoreStoriesCard } from "./MoreStoriesCard"


export const MoreStories = ({array,id}) => {
 
    const {data:filteredArticles } =  useMoreStories(array,id)
    console.log(filteredArticles)
  return (
    <div className="my-6">
        <span className="more_stories border-l-8 border-b-[1px] border-dark_orange py-2 flex">
            <h1 className="ml-2 font-semibold text-md">More Stories</h1>
        </span>

        <span className="mt-4 flex">
            <MoreStoriesCard  />
        </span>
    </div>
  )
}
