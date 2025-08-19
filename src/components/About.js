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
            I love being adventures, whether it is exploring new places, trying new foods, or learning new skills.
          </p>
        </div>
        <div className="about-buttons">
          <a href="samyukrishnasamy.github.io/assets/resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-button">View Resume</a>
          <a href="samyukrishnasamy.github.io/assets/transcript.pdf" target="_blank" rel="noopener noreferrer" className="nav-button">View Transcript</a>
        </div>
      </div>
    </section>
  );
};

export default About; 