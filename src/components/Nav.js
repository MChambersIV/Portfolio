import React from "react";
import Home from "./pages/Home";
import Header from "./Header";

function Nav() {
    return (
      <div>
        
        <Header />
            
        <ul className="nav bg-dark text-light">
            <li className="nav-link">
                <a href="#home">Home</a>
            </li>
            <li className="nav-link">
                <a href="#projects">Projects</a>
            </li>
            <li className="nav-link">
                <a href="#contact">Contact Me</a>
            </li>
        </ul>
        
        <Home />
      
      </div>
    )
}

export default Nav;