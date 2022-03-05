import React from 'react';


export default function Nav({ changePage }) {
  return (
    <ul className="nav dark">
      <li className="nav-item">
        <a href="#home" onClick= { () => changePage('Home') } className="nav-link" >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="#projects" onClick= { () => changePage('Projects') } className="nav-link">
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a href="#contact" onClick= { () => changePage('Contact') } className="nav-link">
          Contact Me
        </a>
      </li>
    </ul>
  );
}
