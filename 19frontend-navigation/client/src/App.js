import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Service from "./pages/Service";
import Register from "./pages/Register";



function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/service" element={<Service/>} />
            <Route path="/register" element={<Register/>} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
