import React from "react";

const boxStyle = {
  color: "red",
  borderStyle: "solid",
  borderRadius: "5px",
  borderWidth: "2px",
  borderColor: "red",
  margin: "10px",
  textAlign: "center"

};

const listStyle = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",

}

function Resume() {
    return (
        <div class="d-flex flex-column" style={listStyle}>
         <p style={listStyle}>JavaScript</p>
         <p style={listStyle}>React</p>
         <p style={listStyle}>SQL</p>
         <p style={listStyle}>MongoDB</p>
         <p style={listStyle}>CSS</p>
         <p style={listStyle}>HTML</p>
        <a style={boxStyle} href="https://drive.google.com/file/d/1zWUbt27l-IwGQGAYzvlKaHQCopJl1Und/view?usp=sharing">Resume</a>
        </div>
    )
}

export default Resume;