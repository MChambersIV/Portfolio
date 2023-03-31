import React from "react";

const boxStyle = {
    display: "block",
    color: "red",
    borderStyle: "solid",
    borderRadius: "1px",
    borderWidth: "2px",
    borderColor: "red",
    margin: "1px",
    justifyContent: "center"

};

const listStyle = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",

}

function Resume() {
    return (
        <div>
         
         <a style={boxStyle} href="https://drive.google.com/file/d/1zWUbt27l-IwGQGAYzvlKaHQCopJl1Und/view?usp=sharing">Resume</a>
         
         <div class="d-flex flex-column">
            <p style={listStyle}>JavaScript</p>
            <p style={listStyle}>React</p>
            <p style={listStyle}>SQL</p>
            <p style={listStyle}>MongoDB</p>
            <p style={listStyle}>CSS</p>
            <p style={listStyle}>HTML</p>
         </div>
        
        </div>
    )
}

export default Resume;