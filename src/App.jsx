import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./View/About/About";
import Client from "./View/Clients/Clients";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<About />}></Route>
        <Route exact path="/client" element={<Client/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
