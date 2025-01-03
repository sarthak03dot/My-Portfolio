
import "./app.scss";
import Cursor from './components/cursor/Cursor'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/hero/Hero'
import Parallax from './components/parallax/Parallax'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Services from './components/services/Services'

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      {/* Framer Motion Crash Course */}
      {/* <Test/>
    <Test/> */}
    </div>
  );
};

export default App;