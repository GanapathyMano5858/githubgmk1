import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Ganapathy_Mano_CV from "./Ganapathy_Mano_CV.pdf";
import { themeContext } from "../../Context";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <spane>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam amet
          adipisci omnis minus veritatis quos placeat, <br />a ullam, error
          corrupti asperiores. Ducimus, autem qui tenetur in asperiores
          voluptatum veniam accusamus.
        </spane>
        <a href={Ganapathy_Mano_CV} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#C1F5FF" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <div style={{ left: "14rem" }}>
          {/* first card */}
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Photoshop, Illustrator, Adobe Xd"}
          />
        </div>
        {/* second card */}
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"HTML5, CSS3, Bootstrap, JavaScript, ReactJS"}
          />
        </div>
        {/* third card */}
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Lorem ipsum, dolor sit amet consectetur adipisicing elit."}
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
