import React from 'react';
import { Link } from "react-router-dom"


function Nav() {
  return (
    <nav>
      <div className="nav-bar">
        <a className="my-name" href="/"><h1>💻 Seif <span class="lastn">Enan</span></h1></a>
        <div>
          <ul>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
