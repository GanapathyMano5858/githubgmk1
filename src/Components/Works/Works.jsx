import React from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

const Works = () => {
  return (
    <div className="works">
      <div className="awesome">
        <span>Works for All These</span>
        <span>Brands & Clients</span>
        <spane>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam amet
          adipisci omnis minus veritatis quos placeat,
          <br />a ullam, error corrupti asperiores.
          <br />a ullam, error adipisci omnis minus veritatis quos placeat,
          <br />
          sit amet consectetur, adipisicing elitipisci omnis minus veritatis
        </spane>
        <button className="button s-button">Hire ME</button>
        <div className="blur s-blur1" style={{ background: "#C1F5FF" }}></div>
      </div>

      {/* right side */}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="Upwork" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="Fiverr" />
          </div>
          <div className="w-secCircle">
            <img src={amazon} alt="amazon" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="Shopify" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="Facebook" />
          </div>
        </div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
