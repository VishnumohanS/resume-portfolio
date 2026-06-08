import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Specializations from './components/Specializations';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main className="bento-container">
        {/* Row 1 */}
        <Hero />
        
        {/* Row 2 */}
        <Projects />
        
        {/* Row 3 */}
        <Skills />
        <Specializations />
        
        {/* Row 4 */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
