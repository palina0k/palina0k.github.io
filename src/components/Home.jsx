import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/Home.css';

// const TypingText = ({ text, delay }) => {
//   const [displayedText, setDisplayedText] = useState("");
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     if (index < text.length) {
//       const timeoutId = setTimeout(() => {
//         setDisplayedText((prevText) => prevText + text[index]);
//         setIndex((prevIndex) => prevIndex + 1);
//       }, delay);
//       return () => clearTimeout(timeoutId);
//     }
//   }, [text, delay, index]);

//   return <span>{displayedText}</span>;
// };

const TypingText = ({ text, delay = 100, repeatDelay = 10000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      // Still typing
      const timeoutId = setTimeout(() => {
        setDisplayedText((prevText) => prevText + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeoutId);
    } else {
      // Finished typing - reset after delay
      const resetTimer = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, repeatDelay);
      return () => clearTimeout(resetTimer);
    }
  }, [text, delay, repeatDelay, index]);

  return <span>{displayedText}</span>;
};

export default function Home() {
    return (
        <div className="home-container">
            <h2>Hello and Welcome! ✌️</h2>
            <h5><TypingText text="I'm Palina Karzhenka, a Computer Science student at UC Davis." delay={90} repeatDelay={6000} /></h5>
            <h6>I build digital experiences with code. 👩🏻‍💻 <br/> Let's turn ideas into reality!</h6>
            <div className="buttons">
                <Link to="/technical" id="tech_home" ><h5>TECHNICAL</h5></Link> 
                <Link to="/studio-art" id="art_home" ><h5>STUDIO ART</h5></Link>
                <Link to="/about" id="abt_home" ><h5>ABOUT</h5></Link>
            </div>
        </div>
    );
}