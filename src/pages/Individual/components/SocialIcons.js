

export const SocialIcons = () => {
    const socials = [
        {
          name:"share",
          icon:"bi bi-share-fill"
        },
        {
          name:"facebook",
          icon:"bi bi-facebook"
        },
        {
          name:"x",
          icon:"bi bi-twitter-x"
        },
        {
          name:"email",
          icon:"bi bi-envelope"
        },
      ]
  
  return (
    <div className="h-[200px] w-auto px-4 flex flex-col items-center">
        {socials.map((item,index) => (
        <span key={index}  className={`${item.icon} my-2 p-2 text-xl text-gray-500 hover:bg-dark_orange hover:cursor-pointer`}/>
        ))}
    </div>
  )
}
