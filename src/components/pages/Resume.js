import React from "react";

const boxStyle = {
    textDecoration: "none",
    color: "green",
    padding: "5px",
    fontSize: "25px",
    backgroundColor: "rgba(0, 255, 0, 0.3)",
    borderStyle: "solid",
    borderRadius: "1px",
    borderWidth: "2px",
    borderColor: "green",
    marginTop: "15px",
    marginBottom: "15px",
    marginLeft: "10%",
    marginRight: "auto",
};

const listStyle = {
    display: "block",
    fontFamily: "Roboto",
    marginLeft: "30%",
    marginRight: "auto"

};

const titleStyle = {
    display: "block",
    fontFamily: "Roboto",
    marginLeft: "20%",
    marginRight: "auto"

};

function Resume() {
    return (
        <div>
         <div class="nav justify-content-center">
         <a class="nav-item" style={boxStyle} href="https://drive.google.com/file/d/1Kf5OQGbu3bLpuO5uvBDNNuUu4OA1_DX2/view">Resume</a>
        </div>
         <div class="d-flex flex-column">
            <h3 style={titleStyle}>Languages:</h3>
            <p style={listStyle}>JavaScript</p>
            <p style={listStyle}>CSS3</p>
            <p style={listStyle}>HTML</p>
            
            <h3 style={titleStyle}>Technologies:</h3>
            <p style={listStyle}>React</p>
            <p style={listStyle}>Git</p>
            <p style={listStyle}>Node</p>
            <p style={listStyle}>BootStrap</p>
            <p style={listStyle}>mySQL</p>
            <p style={listStyle}>noSQL</p>
            <p style={listStyle}>MongoDB</p>
            
            
         </div>
        
        </div>
    )
}

export default Resume;