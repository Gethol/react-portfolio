import logo from './logo.svg';
import './App.css';
import './components/Navigation.jsx'
import Navigation from './components/Navigation';
import Hero from './components/Hero.jsx'
import AboutUs from './components/AboutUs.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';
import Quotes from './components/Quotes.jsx';

function Navbar(){
  
}




function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <AboutUs />
      <Quotes/>
      <Experience />
      <Skills />
      <Projects />
      <Footer />

    </>

  );
}

export default App;
