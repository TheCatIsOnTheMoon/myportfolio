import React from 'react';

function Contact() {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <form className="contact__form" name="contact" method="POST" data-netlify="true">
        <p>
          <label className="contact__form__label" htmlFor="name">Name</label>
          <input className="contact__form__input" type="text" id="name" name="name" placeholder="Name"/>
        </p>
        <p>
          <label className="contact__form__label" htmlFor="email">Email</label>
          <input className="contact__form__input" type="text" id="email" name="email" placeholder="Email" maxLength={50}/>
        </p>
        <p>
          <label className="contact__form__label" htmlFor="message">Message</label>
          <textarea className="contact__form__input" id="message" name="message" placeholder="Leave me a message :)" rows={4} cols={50}></textarea>
        </p>
        <p>
          <button className="contact__form__submitbtn button" type="submit">Send</button>
        </p>
      </form>
    </section>
  );
}

export default Contact;
