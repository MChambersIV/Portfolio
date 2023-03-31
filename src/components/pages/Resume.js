import React from "react";

const boxStyle = {
    textDecoration: "none",
    color: "green",
    padding: "5px",
    fontSize: "18px",
    borderStyle: "solid",
    borderRadius: "1px",
    borderWidth: "2px",
    borderColor: "green",
    marginTop: "15px",
    marginBottom: "15px"
};

const listStyle = {
    display: "block",
    fontFamily: "Roboto",
    marginLeft: "20%",
    marginRight: "auto"

};

const titleStyle = {
    display: "block",
    fontFamily: "Roboto",
    marginLeft: "10%",
    marginRight: "auto"

};

function Resume() {
    return (
        <div>
         <div class="nav justify-content-center">
         <a class="nav-item" style={boxStyle} href="https://drive.google.com/file/d/1zWUbt27l-IwGQGAYzvlKaHQCopJl1Und/view?usp=sharing">Resume</a>
        </div>
         <div class="d-flex flex-column">
            <h3 style={titleStyle}>Languages:</h3>
            <p style={listStyle}>JavaScript</p>
            <p style={listStyle}>React</p>
            <p style={listStyle}>CSS3</p>
            <p style={listStyle}>HTML</p>
            
            <h3 style={titleStyle}>Technologies:</h3>
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