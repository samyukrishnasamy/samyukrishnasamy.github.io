import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={sticky ? 'sticky' : ''}>
      <div className="nav-container">
        <a href="#about" className="nav-button">About</a>
        <a href="#projects" className="nav-button">Projects</a>
        <a href="#contact" className="nav-button">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar; 