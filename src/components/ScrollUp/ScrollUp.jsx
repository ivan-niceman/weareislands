
import { useState, useEffect } from 'react';

export default function ScrollUp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 2000);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button id="scrollUpButton" className={`scroll-up${isVisible ? ' scroll-up_visible' : ''}`} onClick={scrollToTop}>
      <span />
      <span />
    </button>
  );
}
