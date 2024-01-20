/* eslint-disable */
import { useState } from "react"
import { Main } from "./Main";
import { Scrolltop,Footer } from "./components"
import { BrowserRouter } from "react-router-dom"
import { navOptions } from "./components/DataStructures/NavOptions";

function App() {
  const [category,setCategory] = useState(navOptions[0])
  const [search, setSearch] = useState(false)

  const object = {
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
