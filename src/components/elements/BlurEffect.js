import blur from "../../assets/images/blurImg.jpg"

export const BlurEffect = ({height,width,maxWidth}) => {
  return (
    <div className={`animate-pulse ${height} ${width} ${maxWidth}`} style={{backgroundImage:`url(${blur})`, backgroundSize:"cover",backgroundRepeat: "no-repeat"}}></div>
  )
}
