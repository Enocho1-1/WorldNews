import { Route,Routes } from "react-router-dom"
import { CategoryPage } from "../pages"

export const AllRoutes = () => {
  const navOptions = [
    { 
      name:"NEWS",
      color:"bg-dark_orange",
      text: "text-dark_orange",
      path: "/news"
    },
    { 
      name:"BUSINESS",
      color:"bg-vivid_cyan",
      text: "text-vivid_cyan",
      path: "/business"
    },
    { 
      name:"SPORTS",
      color:"bg-pure_green",
      text: "text-pure_green",
      path: "/sports"
    },
    { 
      name:"ENTERTAINMENT",
      color:"bg-bright_blue",
      text: "text-bright_blue",
      path: "/entertainment"
    },
    { 
      name:"HEALTH",
      color:"bg-pure_yellow",
      text: "text-pure_yellow",
      path: "/health"
    },
    { 
      name:"SCIENCE",
      color:"bg-pure_gray",
      text: "text-pure_gray",
      path: "/science"
    },
    { 
      name:"TECHNOLOGY",
      color:"bg-moderate_violet",
      text: "text-moderate_violet",
      path: "/tech"
    }
  ]
  return (
   <>
    <Routes>
      { navOptions.map((item,index) => (
        <Route key={index} path={item.path} element={<CategoryPage title={item.name} />}/>
      ))}
    </Routes>
   </>
  )
}
