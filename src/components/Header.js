import React from "react";
import linkedIn from "./images/icons/linkedIn.png";
import gitHub from "./images/icons/github.png";
import Medium from "./images/icons/medium.png";

const headStyle = {
    background: "black",
    color: "white",
    fontSize: "50px",
    fontFamily: "Roboto",
    position: "fixed",
    width: "100%",
    top: "0",
    zIndex: "3",
};

const ghostStyle = {
    background: "black",
    color: "white",
    fontSize: "50px",
    fontFamily: "Roboto",
    position: "sticky",
    width: "100%",
    top: "0",
    opacity: "0"
};

const linkStyle = {
    background: "black",
};

function Header() {
    return (
    <div style={linkStyle}>
       
       <div>
            <h1 className="title text-center row-start" style={headStyle}>Chambers</h1>
            <h1 className="title text-center row-start" style={ghostStyle}>Chambers</h1>
       </div>

       <div className="nav justify-content-center">
            <a className="nav-link text-white" href="https://linkedin.com/in/millard-chambers">
                <img style={{maxWidth: "25px", maxHeight: "25px"}} src={linkedIn} alt="linkedIn logo"></img>
            </a>
        
            <a className="nav-link text-white" href="https://github.com/MChambersIV">
                <img style={{maxWidth: "25px", maxHeight: "25px"}} src={gitHub} alt="GitHub logo"></img>
            </a>
        
            <a className="nav-link text-white" href="https://medium.com/@chambersm025">
                <img style={{maxWidth: "37px", maxHeight: "25px"}} src={Medium} alt="Medium logo"></img>
            </a>
       </div>
        
        
       
       
    </div>
    )
}

export default Header;