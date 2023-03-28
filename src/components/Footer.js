import React from "react";
import linkedIn from "./images/icons/linkedIn.png";
import gitHub from "./images/icons/github.png";
import Medium from "./images/icons/medium.png";

const footStyle = {
 
  background: "black",
  color: "white",
  fontFamily: "Roboto",
  width: "100%",
  bottom: "0",
  position: "fixed",
  display: "flex",
  justifyContent: "center"
}

function Footer() {
    return (
      <div className="nav justify-content-center" style={footStyle}>
      <a className="nav-link text-white" href="https://linkedin.com/in/millard-chambers">
          <img style={{maxWidth: "50px", maxHeight: "50px"}} src={linkedIn} alt="linkedIn logo"></img>
      </a>
  
      <a className="nav-link text-white" href="https://github.com/MChambersIV">
          <img style={{maxWidth: "50px", maxHeight: "50px"}} src={gitHub} alt="GitHub logo"></img>
      </a>
  
      <a className="nav-link text-white" href="https://medium.com/@chambersm025">
          <img style={{maxWidth: "75px", maxHeight: "50px"}} src={Medium} alt="Medium logo"></img>
      </a>
      </div>
    )
}

export default Footer;