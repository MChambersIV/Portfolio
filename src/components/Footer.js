import React from "react";

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
          
          <a className="nav-link" href="https://linkedin.com/in/millard-chambers" style={footStyle}>LinkedIn</a>
          
          <a className="nav-link" href="https://github.com/MChambersIV" style={footStyle}>GitHub</a>
          
          <a className="nav-link" href="https://medium.com/@chambersm025" style={footStyle}>Medium</a>
        
        </div>
    )
}

export default Footer;