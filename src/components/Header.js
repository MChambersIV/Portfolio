import React from "react";

const headStyle = {
    background: "black",
    color: "white",
    fontSize: "50px",
    fontFamily: "Roboto"
};

function Header() {
    return (
        <h1 className="title text-center row-start" style={headStyle}>Chambers</h1>
    )
}

export default Header;