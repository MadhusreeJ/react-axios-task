import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Insert from "./Pages/Insert";
import Update from "./Pages/Update";


function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="insert" element={<Insert/>}/>
        <Route path="update/:id" element={<Update/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
