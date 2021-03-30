import React from "react";
import "./ScreenDemoLeft.scss";

const ScreenDemoLeft = ({ header, contents, image, position }) => {
  return (
    <section
      className="screen-demo-section-left"
      style={{ top: `${position}` }}>
      <div className="screen-demo-image-container">
        <div className="screen-outline">
          <img src={image} height="750px" />
        </div>
      </div>
      <div className="screen-demo-contents-container-left">
        <h3 className="screen-demo-header">{header}</h3>
        <p className="screen-demo-description">{contents}</p>
      </div>
    </section>
  );
};

export default ScreenDemoLeft;
