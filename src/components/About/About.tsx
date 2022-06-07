import React from 'react';
import photoback from '../../assets/pictures/photoback.svg';
import photo from '../../assets/pictures/photo.jpg';
import pin from '../../assets/svg/pin.svg';
import mars from '../../assets/planetsvg/mars.svg';

function About() {
  return (
    <section className="about">
      <div className="about__title">
        <h2 className="about__title__text">
          Hi, I’m Sam,
          <br />a Front-End Developer.
        </h2>
        <div className="about__title__photos">
          <img className="about__title__photos__back" src={photoback} alt="portrait" />
          <img className="about__title__photos__photo" src={photo} alt="portrait" />
          <img className="about__title__photos__pin" src={pin} alt="img"></img>
        </div>
      </div>
      <p className="about__text">
        After spending the first part of my life in the world of Art History and
        Archaeology, I turned to Front-End development. I started my journey by
        completing the{' '}
        <a href="https://openclassrooms.com/fr/">openclassroom </a> course as an
        Application Developer - JavaScript React. With my new degree in hand, I
        am now training with the aim of progressing in my front end
        capabilities. I also started learning the back-end with Node.JS with the
        objective of better mastering all the elements of an application.
      </p>
      <img src={mars} alt="img" className="planet" id="mars"></img>
    </section>
  );
}

export default About;
