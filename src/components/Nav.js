import React from 'react';

const boxStyle = {
  color: "orange",
  borderStyle: "solid",
  borderRadius: "5px",
  borderWidth: "1px",
  borderColor: "orange",
  margin: "10px",

};


export default function Nav({ changePage }) {
  return (
    <ul className="nav justify-content-center mt-3">
      <li className="nav-item">
        <a href="#home" onClick= { () => changePage('Home') } className="nav-link" style={boxStyle} >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="#about" onClick= { () => changePage('About') } className="nav-link" style={boxStyle}>
          About
        </a>
      </li>
      <li className="nav-item">
        <a href="#projects" onClick= { () => changePage('Projects') } className="nav-link" style={boxStyle}>
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a href="#resume" onClick= { () => changePage('Resume') } className="nav-link" style={boxStyle}>
          Resume
        </a>
      </li>
    </ul>
  );
}
