import blur from "../../assets/images/blurImg.jpg"

export const BlurEffect = ({height,width}) => {
  return (
    <div className={`animate-pulse ${height} ${width}`} style={{backgroundImage:`url(${blur})`, backgroundSize:"cover",backgroundRepeat: "no-repeat"}}></div>
  )
}
