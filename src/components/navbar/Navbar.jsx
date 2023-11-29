import "./navbar.css";
import {Link} from 'react-scroll'
import { useState } from "react";

function Navbar() {
  const [showMenu, setShowMenu]=useState(false);
  return (
    <nav className="navbar">
      <div className="logosection">
        <img src="./logo.png" alt="" className="logo" />
        <h2>Tina Majumder</h2>
      </div>
      <div className="links">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="item"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="item"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="item"
        >
          Skills
        </Link>
        <Link
          to="projects"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="item"
        >
          Projects
        </Link>
      </div>
      <button
        className="contactMe"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src="./communicate.png" alt="" className="contact" />
        <span>ContactMe</span>
      </button>

      <img
        src="./more.png"
        alt="menu"
        className="mobMenu"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="hideMenu"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="hideMenu"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="hideMenu"
          onClick={() => setShowMenu(false)}
        >
          Skills
        </Link>
        <Link
          to="projects"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="hideMenu"
          onClick={() => setShowMenu(false)}
        >
          Projects
        </Link>
        <Link
          to="contact"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="hideMenu"
          onClick={() => setShowMenu(false)}
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
