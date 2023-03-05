import React from 'react';


export default function Nav({ changePage }) {
  return (
    <ul className="nav dark center">
      <li className="nav-item">
        <a href="#home" onClick= { () => changePage('Home') } className="nav-link" >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="#about" onClick= { () => changePage('About') }className="nav-link">
          About
        </a>
      </li>
      <li className="nav-item">
        <a href="#projects" onClick= { () => changePage('Projects') } className="nav-link">
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a href="#resume" onClick= { () => changePage('Resume') } className="nav-link">
          Resume
        </a>
      </li>
    </ul>
  );
}
