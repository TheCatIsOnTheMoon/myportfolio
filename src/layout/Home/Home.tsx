import React from 'react';

//components
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Projects from '../../components/Projects/Projects';
import Skills from '../../components/Skills/Skills';

function Home() {
  return (
    <>
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default Home;
