import React, { useState } from "react";

export default function Nav() {
  return (
    <section className="nav" style={{ display: "-webkit-box" }}>
      <img
        src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/jhq1vs9ftedvlsculmn6"
        alt="companyLogo"
        style={{ position: "relative", top: "-63px" }}
      />
      <div
        style={{
          color: "white",
          display: "flex",
          position: "relative",
          top: "31px",
        }}
      >
        <h1 style={{ color: "white" }} className="slogan">
          STRATEGY
        </h1>
        <h1 style={{ color: "#C61E1E" }} className="slogan">
          |
        </h1>
        <h1 className="slogan">DESIGN</h1>
        <h1 style={{ color: "#C61E1E" }} className="slogan">
          |
        </h1>
        <h1>EXPERIENCE</h1>
      </div>
    </section>
  );
}
