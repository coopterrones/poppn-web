import emailjs from "emailjs-com";
import React from "react";
import "./Contact.scss";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y5uowpq",
        "contact_form_poppn",
        e.target,
        "user_GbsaZ6vJmwL5nZ3CuaYrO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div className="contact-form-background">
      <div className="contact-form-container">
        <h2 className="contact-form-header">Contact Us</h2>
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <label className="contact-name-label" htmlFor="user_name">
            Name
          </label>
          <input type="text" name="user_name" className="name-input" />
          <label className="contact-email-label" htmlFor="user_email">
            Email
          </label>
          <input type="email" name="user_email" className="email-input" />
          <label>Message</label>
          <textarea name="message" className="message-text-area" />
          <input type="submit" value="Send" className="submit-button" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
