

export const SocialIcons = () => {
    const socials = [
        {
          name:"facebook",
          icon:"bi bi-facebook"
        },
        {
          name:"x",
          icon:"bi bi-twitter-x"
        },
        {
          name:"google",
          icon:"bi bi-google"
        },
        {
          name:"email",
          icon:"bi bi-envelope"
        },
      ]
  
  return (
    <div className="h-[200px] w-auto px-4 flex flex-col max-[769px]:hidden">
       <span className="bi bi-share-fill mb-2 p-2 text-xl text-gray-500 "/>
        {socials.map((item,index) => (
        <span key={index}  className={`${item.icon} my-2 p-2 text-xl text-gray-500 hover:bg-dark_orange hover:cursor-pointer`}/>
        ))}
    </div>
  )
}
