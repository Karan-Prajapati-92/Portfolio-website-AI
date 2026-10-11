import Glow from './components/Glow.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Upcoming from './components/Upcoming.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Glow />
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <main id="top">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Upcoming />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
