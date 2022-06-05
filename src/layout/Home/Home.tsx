import React from 'react';

//components
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Projects from '../../components/Projects/Projects';
import Separator from '../../components/Separator/Separator';
import Skills from '../../components/Skills/Skills';

//data
import { separators } from '../../data/separators';

function Home() {
  return (
    <>
      <main>
        <About />
        <Separator
          key={separators[0].id}
          position=""
          number={separators[0].number}
          text={separators[0].text}
          linkText={separators[0].linkText}
          link={separators[0].link}
        />
        <Skills />
        <Projects />
        <Separator
          key={separators[1].id}
          position="reverse"
          number={separators[1].number}
          text={separators[1].text}
          linkText={separators[1].linkText}
          link={separators[1].link}
        />
        <Contact />
      </main>
    </>
  );
}

export default Home;
