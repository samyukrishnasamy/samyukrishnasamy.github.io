import React from 'react';

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-content-wrapper">
        <div className="about-main-text">
          <p>
            I am a rising senior at the University of Virginia studying Computer Science and Data Science.
            I love being adventures, whether it is exploring new places, trying new foods, or learning new skills.
          </p>
        </div>

        <img src="assets/headshot.jpeg" alt="Samyu Krishnasamy" className="about-profile-pic" />

      </div>
    </section>
  );
};

export default About; 