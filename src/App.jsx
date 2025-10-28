import Navbar from './components/navbar/navbar.jsx';
import Hero from './components/hero/Hero.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      < Contact />
    </>
  );
}

export default App;
