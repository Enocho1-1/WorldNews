import loading from "../../assets/gif/giphy.gif"

interface  GifProps {
  height: string
}
export const GifLoader = ({height}:GifProps) => {
  return (
    <span className={`w-inherit h-[${height}] flex justify-center items-center`}>
        <img src={loading} alt="Loading..." />
    </span>
  )
}
