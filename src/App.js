import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Banner from './Banner';
import Footer from './Footer';

//Use HashRouter instead of BrowserRouter for Github Pages hosting!!!!!

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
