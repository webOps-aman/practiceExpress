import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Service from "./pages/Service";
import Register from "./pages/Register";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Footer from "./Footer/Footer";
import {Logout} from "./pages/Logout";



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/service" element={<Service/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/logout" element={<Logout/>} />
            <Route path="*" element={<Error/>} />
          </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
