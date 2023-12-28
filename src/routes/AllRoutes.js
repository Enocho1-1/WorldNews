import { Route,Routes } from "react-router-dom"
import { CategoryPage,IndividualNewsPage,Weather,SearchWeather } from "../pages"
import { navOptions } from "../components/arrays/NavOptions"

export const AllRoutes = () => {

  return (
   <>
    <Routes>
      { navOptions.map((item,index) => (
        <Route key={index} path={item.path} element={<CategoryPage option={item} />}/>
      ))}
      <Route  path="/individual/:title" element={<IndividualNewsPage />}/>
      <Route  path="/weather/current-location" element={<Weather />}/>
      <Route  path="search-location" element={<SearchWeather />}/>
    </Routes>
   </>
  )
}
