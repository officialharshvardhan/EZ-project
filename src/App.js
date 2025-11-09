import './App.css';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import Art from './pages/Art';
import Branding from './pages/Branding';
import Contact from './pages/Contact';
import FilmProduction from './pages/FilmProduction';
import Services from './pages/Services';
import About from './pages/About';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
      <Router>
        <div className="app">
            <Navbar/>

            {/* Routes */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home/>} />  
              <Route path="/ourstory"  element={<About/>} />
              <Route path="/stories"  element={<AboutUs/>} />
              <Route path="/services"  element={<Services/>} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services/filmProduction" element={<FilmProduction />} />
          <Route path="/services/branding" element={<Branding />} />
          <Route path="/services/art" element={<Art/>} />
            </Routes>
        </div>
      </Router>
    
  );
}

export default App;
