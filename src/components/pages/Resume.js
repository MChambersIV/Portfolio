import React from "react";

const boxStyle = {
  color: "red",
  borderStyle: "solid",
  borderRadius: "5px",
  borderWidth: "2px",
  borderColor: "red",
  margin: "10px",
  alignText: "center"

};

function Resume() {
    return (
        <div class="d-flex flex-column justify-content-center">
         <p>JavaScript</p>
         <p>React</p>
         <p>SQL</p>
         <p>MongoDB</p>
         <p>CSS</p>
         <p>HTML</p>
        <a style={boxStyle} href="https://drive.google.com/file/d/1zWUbt27l-IwGQGAYzvlKaHQCopJl1Und/view?usp=sharing">Resume</a>
        </div>
    )
}

export default Resume;