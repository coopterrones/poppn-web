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
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" className="name-input" />
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
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
