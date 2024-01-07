

export const BannerImage = ({image}) => {
  return (
    <div className="relative flex flex-col">
         
        <div className="individual-img" style={ {
                backgroundImage: `url(${image})`,
                backgroundSize:"cover",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: "50%"
        }}>
        </div>
        <span className="mt-1 px-4 flex justify-end">
            <p className="text-xs">Copyright © worldnews/Copyright 2023 The AP. All rights reserved.</p>
        </span>
    </div>
  )
}
