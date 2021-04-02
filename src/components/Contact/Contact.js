import React from "react";

import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-container">
      <h1 className="contact-title">Contact</h1>
      <form className="contact-form">
        <input
          type="text"
          className="first-name"
          placeholder="First name"
        ></input>
        <input
          type="text"
          className="last-name"
          placeholder="Last name"
        ></input>
        <input type="email" className="email" placeholder="Email"></input>
        <textarea placeholder="Message"></textarea>
        <button className="form-submit" onSubmit={() => this.submitForm()}>
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
