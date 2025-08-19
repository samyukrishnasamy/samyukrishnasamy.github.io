import React, { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={sticky ? 'sticky' : ''}>
      <div className="nav-name">samyu krishnasamy</div>
      <div className="nav-container">
        <a href="#about" className="nav-button">about</a>
        <a href="#projects" className="nav-button">projects</a>
        <a href="#contact" className="nav-button">contact</a>
        <button onClick={toggleTheme} className="nav-button theme-toggle">
          <img src={theme === 'dark' ? '/assets/lightmode.png' : '/assets/darkmode.png'} alt="Toggle Theme" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 