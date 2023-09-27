import React from "react";
import "./Services.css";
// import

const Services = () => {
  return (
    <div className="services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <spane>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam amet
          adipisci omnis minus veritatis quos placeat, <br />a ullam, error
          corrupti asperiores. Ducimus, autem qui tenetur in asperiores
          voluptatum veniam accusamus.
        </spane>
        <button className="button s-button">Download CV</button>
        <div className="blur s-blur1" style={{background:"ABF1FF94"}}></div>
      </div>
      {/* right side */}
      <div className="cards">I am the right side</div>
    </div>
  );
};

export default Services;
