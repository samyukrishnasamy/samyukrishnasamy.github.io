import React from 'react';

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-content-wrapper">
        <div className="about-main-text">
          <p>
            I am a rising senior in college passionate about technology and innovation. 
            I love learning new skills and working on challenging projects.
          </p>
        </div>

        <div className="skills-card">
          <h3>Skills</h3>
          <ul className="skills-list">
            <li>JavaScript</li>
            <li>React</li>
            <li>Python</li>
            <li>HTML/CSS</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About; 