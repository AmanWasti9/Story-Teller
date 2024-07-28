import React, { useState, useEffect } from "react";
import s2 from '../Images/s2.jpg';
import s3 from '../Images/s3.png';
import s4 from '../Images/s4.jpeg'; 
import s7 from '../Images/s7.jpg'; 


export default function Hero() {
  const images = [s2, s3, s4, s7]; // Array of images
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 1 second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
   <div>
     <div className="hero_main">
      <div className="hero_1">
        <p style={{
          fontSize: "larger",
          wordSpacing: '0.5em',
          textAlign: 'justify',
          lineHeight: '2em',
        }}>
          Are you tired of telling the same old stories to your kids? Children’s
          curiosity is boundless, and they constantly seek new and exciting
          adventures. To make storytelling fresh and engaging, we introduce 
          <strong> Narrify</strong>—the perfect solution to keep their imaginations sparked and
          their hearts entertained.
        </p>
      </div>
      <div className="hero_2">
        <img src={images[currentIndex]} alt="Slideshow" />
      </div>
    </div>
    <br />
    <br />
   </div>
  );
}
