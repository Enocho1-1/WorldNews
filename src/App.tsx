/* eslint-disable */
import { useState } from "react"
import { Main } from "./Main";
import { Scrolltop,Footer } from "./components"
import { BrowserRouter } from "react-router-dom"
import { navOptions } from "./components/DataStructures/NavOptions";

export interface NavObject {
  name:string;
  color:string;
  text: string;
  border:string;
  left: string;
  bottom: string;
  path: string;
  api:string
}

export interface Object {
  navOptions: NavObject[],
  category: NavObject,
  search: boolean,
  setCategory: (obj: NavObject) => void,
  setSearch: (value: boolean) => void
}

function App() {
  const [category,setCategory] = useState(navOptions[0])
  const [search, setSearch] = useState(false)

  const object: Object = {
    navOptions: navOptions,
    category:category,
    search:search,
    setCategory:setCategory,
    setSearch:setSearch
  }
  
  return (
    <>
      <main>
        <BrowserRouter>
          <Scrolltop/>
          <Main object={object}/>
          <Footer object={object}/>
        </BrowserRouter>
      </main>
    </>
    
  );
}

export default App;
