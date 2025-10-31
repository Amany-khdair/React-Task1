
import Navbar from './components/navbar/navbar.jsx';
import Hero from './components/hero/hero.jsx';
import Portfolio from './components/portfolio/portfolio.jsx';
import About from './components/about/about.jsx';
import Contact from './components/contact/contact.jsx';
import Footer from './components/footer/footer.jsx';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
      </Routes>
     
      <Footer />
    </>
  );
}
export default App;
