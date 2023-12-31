

export const BannerImage = ({image,topic}) => {
  return (
    <div className="relative flex flex-col">
         
        <div className="individual-img" style={ {
                backgroundImage: `url(${image})`,
                backgroundSize:"cover",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: "50%"
        }}>
          <span className="absolute bottom-0 left-8 border-l-4 flex justify-center items-center  text-lg truncate ... border-dark_orange bg-white h-[50px] w-[180px] max-[769px]:h-[30px] max-[769px]:text-md">{topic === null ? "News" : topic[0]}</span> 
        </div>
        <span className="mt-1 px-4 flex justify-end">
            <p className="text-xs">Copyright © worldnews/Copyright 2023 The AP. All rights reserved.</p>
        </span>
    </div>
  )
}
