import { Main } from "./Main";
import { Scrolltop,Footer } from "./components"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <>
      <main>
      <BrowserRouter>
        <Scrolltop/>
        <Main/>
        <Footer/>
      </BrowserRouter>
     </main>
    </>
    
  );
}

export default App;
