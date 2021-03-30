import React from "react";
import "./ScreenDemoRight.scss";

const ScreenDemo = ({ header, contents, image, position }) => {
  return (
    <section
      className="screen-demo-section-right"
      style={{ top: `${position}` }}>
      <div className="screen-demo-contents-container-right">
        <h3 className="screen-demo-header">{header}</h3>
        <p className="screen-demo-description">{contents}</p>
      </div>
      <div className="screen-demo-image-container">
        <div className="screen-outline">
          <img src={image} height="750px" />
        </div>
      </div>
    </section>
  );
};

export default ScreenDemo;
