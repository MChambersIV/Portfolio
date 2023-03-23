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

function Header() {
    return (
       <div>
        <h1 className="title text-center row-start" style={headStyle}>Chambers</h1>
        <h1 className="title text-center row-start" style={ghostStyle}>Chambers</h1>
       </div> 
    )
}

export default Header;