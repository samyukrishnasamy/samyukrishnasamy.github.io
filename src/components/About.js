import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="section-content">
        <h2>about me</h2>
        <div className="about-content-wrapper">
          <img src="assets/headshot.jpeg" alt="Samyu Krishnasamy" className="about-profile-pic" />
          <div className="about-main-text">
            <p>
              i am a rising senior at the university of virginia studying computer science and data science.
            </p>
          </div>
          <div className="about-buttons">
            <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-button">resume</a>
            <a href="/assets/transcript.pdf" target="_blank" rel="noopener noreferrer" className="nav-button">transcript</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 