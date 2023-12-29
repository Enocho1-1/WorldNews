

export const BannerImage = ({image,country}) => {
 
  return (
    <div className="relative flex flex-col">
        <span className="absolute top-0 border-l-4 flex justify-center items-center  text-sm border-dark_orange bg-white h-[50px] w-[180px]">{country}</span>
        <img src={image} className="h-[600px] w-inherit" alt="new-img"/>
        <span className="mt-1 px-4 flex justify-end">
            <p className="text-xs">Copyright © worldnews/Copyright 2023 The AP. All rights reserved.</p>
        </span>
    </div>
  )
}
