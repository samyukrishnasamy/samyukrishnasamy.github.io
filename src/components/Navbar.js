import React, { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext';

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

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
      <button
        className="nav-name"
        style={{ background: 'none', border: 'none', padding: 0, margin: 0, cursor: 'pointer' }}
        aria-label="Go to home"
        onClick={() => scrollToSection('home')}
      >
        samyu krishnasamy
      </button>
      <div className="nav-container">
        <button
          className="nav-button"
          aria-label="Go to about"
          onClick={() => scrollToSection('about')}
        >
          about
        </button>
        <button
          className="nav-button"
          aria-label="Go to projects"
          onClick={() => scrollToSection('projects')}
        >
          projects
        </button>
        <button
          className="nav-button"
          aria-label="Go to contact"
          onClick={() => scrollToSection('contact')}
        >
          contact
        </button>
        <button onClick={toggleTheme} className="nav-button theme-toggle">
          <img src={theme === 'dark' ? '/assets/lightmode.png' : '/assets/darkmode.png'} alt="Toggle Theme" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 