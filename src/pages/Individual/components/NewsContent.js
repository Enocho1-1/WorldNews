

export const NewsContent = ({data}) => {
    const [pubDate,description,content,link,keywords,category,creator] = data

  return (
    
    <div className="mt-8 ml-6 flex flex-col font-open_sans">
        <span className="text-sm text-gray-500 flex"> By {creator} WorldNews <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-fill self-center mx-2" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/></svg>{pubDate}</span>
        <span className="mt-10 p-2 text-md">
            <h1 className="font-semibold font-roboto ">{description}</h1>
            <p className="mt-4  leading-loose text-sm">{content}</p>
        </span>
    </div>
  )
}
