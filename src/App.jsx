import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Vision from './components/Vision';
import Contact from './components/Contact';
import Footer from './components/Footer';
import bgVideo from './assets/bg-video.mp4';

function App() {
  return (
    <div className="App">
      {/* Full-screen video background */}
      <div className="video-bg-wrapper">
        <video autoPlay muted loop playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>
      </div>
      {/* Dark overlay for readability */}
      <div className="video-bg-overlay" />

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Vision />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
