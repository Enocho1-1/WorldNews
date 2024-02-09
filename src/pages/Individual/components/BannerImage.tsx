interface BannerProp{
  image:string
}

export const BannerImage = ({image}:BannerProp) => {
  return (
    <div className="relative flex flex-col">
         <img src={image} className="individual-img" alt="news-img" />
    
        <span className="mt-1 px-4 flex justify-end">
            <p className="text-xs">Copyright © worldnews/Copyright 2023 The AP. All rights reserved.</p>
        </span>
    </div>
  )
}
