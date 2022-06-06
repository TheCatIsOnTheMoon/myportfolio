import React from 'react';
import photo from '../../assets/pictures/photo.svg';

function About() {
  return (
    <section className="about">
      <div className='about__title'>
        <h2 className='about__title__text'>
          Hi, I’m Sam,
          <br />a Front-End Developer.
        </h2>
        <img className='about__title__photo' src={photo} alt="portrait" />
      </div>
      <p className='about__text'>
        After spending the first part of my life in the world of archaeology, I
        turned to Javascript, React and Front-End development. BLA bla bla ...
      </p>
    </section>
  );
}

export default About;
