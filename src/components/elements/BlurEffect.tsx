import blur from "../../assets/images/blurImg.jpg"

interface BlurProps{
  height:string;
  width: string;
  maxWidth: string | ""
}

export const BlurEffect = ({height,width,maxWidth}:BlurProps) => {
  return (
    <div className={`animate-pulse ${height} ${width} ${maxWidth}`} style={{backgroundImage:`url(${blur})`, backgroundSize:"cover",backgroundRepeat: "no-repeat"}}></div>
  )
}
