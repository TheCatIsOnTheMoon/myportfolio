import React from 'react';
import saturn from '../../assets/planetsvg/saturn.svg';

function Contact() {
  return (
    <section className="contact">
      <h2>contact</h2>
      <img src={saturn} alt="img" className='planet' id="saturn"></img>
      <form className="contact__form" name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact-form"/>
        <p>
          <label className="contact__form__label" htmlFor="name">Name</label>
          <input className="contact__form__input" type="text" id="name" name="name" placeholder="Name" maxLength={50} required/>
        </p>
        <p>
          <label className="contact__form__label" htmlFor="email">Email</label>
          <input className="contact__form__input" type="text" id="email" name="email" placeholder="Email" maxLength={50} required/>
        </p>
        <p>
          <label className="contact__form__label" htmlFor="message">Message</label>
          <textarea className="contact__form__textarea" id="message" name="message" placeholder="Leave me a message :)" rows={10} cols={50} maxLength={500} required></textarea>
        </p>
        <p>
          <button className="contact__form__submitbtn button" type="submit">Send</button>
        </p>
      </form>
    </section>
  );
}

export default Contact;
