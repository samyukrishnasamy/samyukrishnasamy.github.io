import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <div className="social-links">
          <a href="mailto:samyukrishnasamy@gmail.com">
            <img src="/assets/email.png" alt="Email" />
          </a>
          <a href="https://linkedin.com/in/samyu-krishnasamy/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/samyukrishnasamy" target="_blank" rel="noopener noreferrer">
            <img src="/assets/github.png" alt="GitHub" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact; 