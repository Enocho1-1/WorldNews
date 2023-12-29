

export const NewsContent = ({data}) => {
    const [pubDate,description,content,category,creator] = data
  return (
    
    <div className="mt-8 ml-6 flex flex-col font-open_sans">
        <aside className="text-sm text-gray-500 flex flex-col"> 
            <div className="flex"> By {creator} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-fill self-center mx-2" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/></svg>{pubDate}</div>
          
         </aside>

        <aside className="mt-6 p-2 text-md">
            <h1 className="font-semibold font-roboto ">{description}</h1>
            <p className="mt-4  leading-loose text-sm">{content}</p>
        </aside>

        <div className="mt-4 flex"> 
                {category.map((item,index) => (
                    <span key={index} className="border-2 border-gray-500 rounded-lg text-gray-500 text-md mx-2 px-2 flex justify-center items-center">{item}</span>
                ))}
        </div>
    </div>
  )
}
