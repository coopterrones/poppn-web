import React from "react";
import "./Announcement.scss";

const Announcement = () => {
  return (
    <section className="announcement-container">
      <h1 className="announcement-text">The Easiest Way to Pay Your Tab</h1>
      <section className="description-text-container">
        <p className="poppn-text">Poppn</p>
        <p className="payment-text"> payment </p>
        <p className="system-text">system</p>
      </section>
      <section className="sub-description-text-container">
        <p className="sub-description-text">
          The most modern way to order ahead and close out fast
        </p>
      </section>
    </section>
  );
};

export default Announcement;
