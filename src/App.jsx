import { Route, Routes, useLocation } from "react-router-dom";
import initFontAwesome from "./components/FontAwesomeIcons/initFontAwesome";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';

initFontAwesome();

function App() {  

  return (
    <>    
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home />} />     
        <Route path="/about" element={<About />} /> 
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>     
    </>
  )

}

export default App