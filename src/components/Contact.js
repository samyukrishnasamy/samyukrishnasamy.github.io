import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h2>contact me</h2>
      <h4>feel free to reach out to me!</h4>
      <div className="contact-info">
        <div className="social-links">
          <div className="contact-item">
            <a href="mailto:samyukrishnasamy@gmail.com">
              <img src="/assets/email.png" alt="Email" />
            </a>
            <p>email</p>
          </div>
          <div className="contact-item">
            <a href="https://linkedin.com/in/samyu-krishnasamy/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/linkedin.png" alt="LinkedIn" />
            </a>
            <p>linkedin</p>
          </div>
          <div className="contact-item">
            <a href="https://github.com/samyukrishnasamy" target="_blank" rel="noopener noreferrer">
              <img src="/assets/github.png" alt="GitHub" />
            </a>
            <p>github</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 