import { Route,Routes } from "react-router-dom"
import { CategoryPage,Weather } from "../pages"
import { navOptions } from "../components/arrays/NavOptions"

export const AllRoutes = () => {

  return (
   <>
    <Routes>
      { navOptions.map((item,index) => (
        <Route key={index} path={item.path} element={<CategoryPage option={item} />}/>
      ))}
      <Route  path="/weather" element={<Weather />}/>
    </Routes>
   </>
  )
}
