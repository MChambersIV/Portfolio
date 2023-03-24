import React from "react";

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
            <a className="nav-link text-white" href="https://linkedin.com/in/millard-chambers">LinkedIn</a>
        
            <a className="nav-link text-white" href="https://github.com/MChambersIV">GitHub</a>
        
            <a className="nav-link text-white" href="https://medium.com/@chambersm025">Medium</a>
       </div>
       
    </div>
    )
}

export default Header;