import { useMoreStories } from "../../../hooks/useMoreStories"
import { MoreStoriesCard } from "./MoreStoriesCard"

interface MoreStoriesProps{
  array:string[];
  id:number
}

export const MoreStories = ({array,id}:MoreStoriesProps) => {
 
    const {data:filteredArticles} =  useMoreStories(array,id)
  return (
    <>
      { 
        filteredArticles.length === 0 
        ? 
        null 
        : 
        (
        <div className="my-6 px-2">
            <span className="more_stories border-l-8 border-b-[1px] border-dark_orange py-2 flex">
                <h1 className="ml-2 font-semibold text-md">More Stories</h1>
            </span>
            
              <span className="mt-4 grid grid-cols-threecols max-[769px]:grid-cols-twocols gap-x-6 gap-y-4">
                {filteredArticles.map((item,index) => (
                    <MoreStoriesCard key={index} item={item} />
                ))}
            </span> 
        
        </div>
      )
      }
    </>
    
  )
}
