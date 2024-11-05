import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Koneko's Portfolio</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;