import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">
          ManO
          {/* <a href="https://www.fontspace.com/category/stencil">
            <img
              src="https://see.fontimg.com/api/renderfont4/MVler/eyJyIjoiZnMiLCJoIjozOSwidyI6MTAwMCwiZnMiOjM5LCJmZ2MiOiIjMTI3MUZBIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/TWFuTw/raginy-regular.png"
              alt="Stencil fonts"
            />
          </a> */}
        </div>
        <span>
          <Toggle />
        </span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link spy={true} to="Services" smooth={true}>
              <li>Services</li>
            </Link>
            <Link spy={true} to="Experience" smooth={true}>
              <li>Experience</li>
            </Link>
            <Link spy={true} to="Portfolio" smooth={true}>
              <li>Portfolio</li>
            </Link>
          </ul>
        </div>
        <button className="button n-button">Contact</button>
      </div>
    </div>
  );
}

export default Navbar;
