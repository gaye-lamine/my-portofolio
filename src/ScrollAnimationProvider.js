// ScrollAnimationProvider.js
import React, { useState, useEffect } from 'react';

const ScrollAnimationContext = React.createContext();

const ScrollAnimationProvider = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollAnimationContext.Provider value={{ scrollPosition }}>
      {children}
    </ScrollAnimationContext.Provider>
  );
};

export const useScrollAnimation = () => {
  return React.useContext(ScrollAnimationContext);
};

export default ScrollAnimationProvider;
