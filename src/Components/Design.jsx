import React from "react";

export default function Design({ image, title, para1, para2 }) {
  return (
    <div className="design_main">
      <div className="design_div_2" data-aos="zoom-in" >
        <h2>{title}</h2>
        <div
          style={{
            fontSize: "large",
          }}
        >
          {para1}
        </div>
        <div
          style={{
            fontSize: "large",
          }}
        >
          {para2}
        </div>
      </div>
      <div className="design_div_1" data-aos="fade-left" >
        <img src={image} alt="" />
      </div>
    </div>
  );
}
