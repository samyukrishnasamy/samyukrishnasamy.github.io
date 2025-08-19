import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ThemeProvider } from './ThemeContext';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('.section-content');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in-active');
          } else {
            entry.target.classList.remove('slide-in-active');
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
      }
    );

    sections.forEach((sectionContent) => {
      observer.observe(sectionContent);
    });

    return () => {
      sections.forEach((sectionContent) => {
        observer.unobserve(sectionContent);
      });
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
