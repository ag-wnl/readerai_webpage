import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Banner from './Banner';
import Footer from './Footer';
import { HashRouter, Route, Routes } from "react-router-dom";
import About from './pages/About';
import Faq from './pages/Faq';
import Home from './Home';
import NoPage from './pages/NoPage';
import Features from './pages/Features';


//Use HashRouter instead of BrowserRouter for Github Pages hosting!!!!!

function App() {
  return (
    <div>
      <HashRouter>

      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/FAQ' element={<Faq />} /> 
        <Route path='/features' element={<Features />} />
        <Route path='*' element={<NoPage />} /> 
      </Routes>
      
      </HashRouter>
    </div>
  );
}

export default App;
