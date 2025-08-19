import { useState, useEffect } from 'react';

const Home = () => {
  const [text, setText] = useState('');
  const fullText = "hello!";
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
      <div className="section-content">
        <h1>{text}<span className="cursor">|</span></h1>
        <p>welcome to my website :)</p>
      </div>
    </section>
  );
};

export default Home; 