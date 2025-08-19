import React, { useState, useEffect } from 'react';

const Home = () => {
  const [text, setText] = useState('');
  const fullText = "Hello! I am Samyu";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const typingTimeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 150); // Speed of typing (150ms per character)

      return () => clearTimeout(typingTimeout);
    } else {
      // Once typing is complete, wait 10 seconds and restart
      const restartTimeout = setTimeout(() => {
        setText(''); // Clear text
        setCurrentIndex(0); // Reset index to start typing again
      }, 1000); // 2 seconds delay

      return () => clearTimeout(restartTimeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section id="home">
      <h1>{text}<span className="cursor">|</span></h1>
      <p>Building impactful web experiences.</p>
    </section>
  );
};

export default Home; 