import { Main } from "./Main";
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <main>
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    </main>
  );
}

export default App;
