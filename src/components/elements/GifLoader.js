import loading from "../../assets/gif/giphy.gif"

export const GifLoader = ({height}) => {
  return (
    <span className={`w-inherit h-[${height}] flex justify-center items-center`}>
        <img src={loading} alt="Loading..." />
    </span>
  )
}
