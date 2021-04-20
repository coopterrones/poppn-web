import React from "react";
import emailjs from "emailjs-com";
import "./FooterSubscribe.scss";

const FooterSubscribe = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y5uowpq",
        "footer_contact_form",
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
  };
  return (
    <div className="footer-form-container">
      <form className="footer-form" onSubmit={sendEmail}>
        <label>Email</label>
        <input type="email" name="user_email" className="footer-email-input" />
        <label>Message</label>
        <textarea name="message" className="footer-message-area" />
        <input type="submit" value="Send" className="footer-message-submit" />
      </form>
    </div>
  );
};

export default FooterSubscribe;
