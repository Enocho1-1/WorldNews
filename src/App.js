import { Main } from "./Main";
import { Scrolltop } from "./components"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <main>
      <BrowserRouter>
        <Scrolltop/>
        <Main/>
      </BrowserRouter>
    </main>
  );
}

export default App;
