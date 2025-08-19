import React from 'react';

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-content-wrapper">
        <img src="assets/headshot.jpeg" alt="Samyu Krishnasamy" className="about-profile-pic" />
        <div className="about-main-text">
          <p>
            I am a rising senior at the University of Virginia studying Computer Science and Data Science.
          </p>
        </div>
        <div className="about-buttons">
          <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-button">Resume</a>
          <a href="/assets/transcript.pdf" target="_blank" rel="noopener noreferrer" className="nav-button">Transcript</a>
        </div>
      </div>
    </section>
  );
};

export default About; 