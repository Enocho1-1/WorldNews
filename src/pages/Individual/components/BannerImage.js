

export const BannerImage = ({image}) => {
  return (
    <div className="relative flex flex-col">
        <img src={image} className="h-[600px] w-inherit" alt="new-img"/>
        <span className="mt-1 flex justify-end">
            <p className="text-xs">Copyright © worldnews/Copyright 2023 The AP. All rights reserved.</p>
        </span>
    </div>
  )
}
