// ScrollingImg.jsx
import React, { useState, useEffect } from 'react';

const ScrollingImg = ({ src, alt, initialWidth, threshold }) => {
  const [imageWidth, setImageWidth] = useState(initialWidth);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      // Increase the width on scroll down
      if (scrollY > threshold && imageWidth !== '60%') {
        setImageWidth('60%');
      }

      // Return to original width on scroll up
      if (scrollY <= threshold && imageWidth !== initialWidth) {
        setImageWidth(initialWidth);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [imageWidth, initialWidth, threshold]);

  return (
    <img
      src={src}
      alt={alt}
      className={`w-${imageWidth} h-auto mx-auto transition-all duration-100`}
    />
  );
};

export default ScrollingImg;
