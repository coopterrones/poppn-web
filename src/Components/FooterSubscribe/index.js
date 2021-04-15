import React from "react";
import emailjs from "emailjs-com";

const FooterSubscribe = () => {
  const sendEmail = (e) => {
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
  };
  return (
    <div className="footer-form-container">
      <form className="footer-form" onSubmit={sendEmail}>
        <label className="footer-email-label" htmlFor="user_email">
          Email
        </label>
        <input type="email" name="user_email" className="footer-email-input" />
        <input type="submit" value="Send" className="footer-submit-button" />
      </form>
    </div>
  );
};

export default FooterSubscribe;
