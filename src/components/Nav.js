import React from 'react';


export default function Nav({ changePage }) {
  return (
    <ul className="nav justify-content-center mt-3">
      <li className="nav-item">
        <a href="#home" onClick= { () => changePage('Home') } className="nav-link text-warning border border-warning mx-1 rounded" >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="#about" onClick= { () => changePage('About') }className="nav-link text-warning border border-warning mx-1 rounded">
          About
        </a>
      </li>
      <li className="nav-item">
        <a href="#projects" onClick= { () => changePage('Projects') } className="nav-link text-warning border border-warning mx-1 rounded">
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a href="#resume" onClick= { () => changePage('Resume') } className="nav-link text-warning border border-warning mx-1 rounded">
          Resume
        </a>
      </li>
    </ul>
  );
}
