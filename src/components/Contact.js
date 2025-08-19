import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <div className="contact-item">
          <h3>Email</h3>
          <p>samyukrishnasamy@gmail.com</p>
        </div>
        <div className="contact-item">
          <h3>LinkedIn</h3>
          <a href="https://linkedin.com/in/samyu-krishnasamy/" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/samyu-krishnasamy/
          </a>
        </div>
        <div className="contact-item">
          <h3>GitHub</h3>
          <a href="https://github.com/samyukrishnasamy" target="_blank" rel="noopener noreferrer">
            github.com/samyukrishnasamy
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact; 