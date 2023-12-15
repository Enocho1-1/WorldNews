
import twitter from "../../assets/social_media/twitter.png"
import youtube from "../../assets/social_media/youtube.png"
import instagram from "../../assets/social_media/instagram.png"
import linkedin from "../../assets/social_media/linkedin.png"
import facebook from "../../assets/social_media/facebook.png"

export const Header = () => {

  const socials = [
    {
      img: twitter,
      name: "X"
    },
    {
      img: youtube,
      name: "Youtube"
    },
    {
      img: instagram ,
      name: "Instagram"
    },
    {
      img:  linkedin,
      name: "Linkedin"
    },
    {
      img: facebook,
      name: "Facebook"
    }

  ]
  return (
    <div className="sticky bg-gray-900 w-inherit h-[3.75rem] flex justify-between">
      <header className="bg-blue-400 text-gray-900 px-2 h-inherit text-[2.813rem] flex items-center font-open_sans"> 
        <h1 className="font-light">World</h1>
        <p className="font-semibold">News.</p>
      </header>

      {/* Social Media */}
      <aside className="h-inherit flex items-center mr-6">
        <h1 className="text-gray-200 text-md font-medium">Join us</h1>
    
        <span className="flex">
          { socials.map((item,index) => (
            <div key={index}>
              <img className="h-[20px] w-[20px] mx-2" src={item.img} alt="social_icon" title={item.name} />
            </div>
          ))}
        </span>
      </aside>
         
    </div>
  )
}
