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
      }, 150);

      return () => clearTimeout(typingTimeout);
    } else {
      const restartTimeout = setTimeout(() => {
        setText('');
        setCurrentIndex(0);
      }, 1000);

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