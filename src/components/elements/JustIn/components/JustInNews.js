import { useJustInNews } from "../../../../hooks/useJustInNews"

export const JustInNews = () => {
  const {data} = useJustInNews()
  console.log(data)
  return (
    <>
        <ul className="just-in-list">
            <li className="text-black text-sm py-3 px-2 flex items-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, ex.</li>
            <li className="text-black text-sm py-3 px-2 flex items-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, ex.</li>
            <li className="text-black text-sm py-3 px-2 flex items-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, ex.</li>
            <li className="text-black text-sm py-3 px-2 flex items-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, ex.</li>
            <li className="text-black text-sm py-3 px-2 flex items-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, ex.</li>
            <li className="text-black text-sm py-3 px-2 flex items-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, ex.</li>
            <li className="text-black text-sm py-3 px-2 flex items-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, ex.</li>
            <li className="text-black text-sm py-3 px-2 flex items-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, ex.</li>
        </ul>
    </>
  )
}
