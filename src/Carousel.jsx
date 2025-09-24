import React, { useState, useEffect } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 4000); // <<-- change this value to adjust slide time
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#222", // dark background
    color: "white", // white arrow
    border: "none",
    borderRadius: "8px", // slightly rounded square
    width: "55px",
    height: "55px",
    fontSize: "32px", // bigger arrows
    fontWeight: "bold",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: "12px",
      }}
    >
      <img
        src={images[currentIndex]}
        alt="carousel"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          transition: "opacity 1s ease-in-out",
        }}
      />

      {/* Previous Button */}
      <button disabled 
        onClick={goToPrevious}
        style={{
          ...buttonStyle,
          display: "none",
          position: "absolute",
          top: "50%",
          left: "15px",
          transform: "translateY(-50%)",
        }}
      >
        ‹
      </button>

      {/* Next Button */}
      <button 
        onClick={goToNext}
        style={{
          ...buttonStyle,
          display: "none",
          position: "absolute",
          top: "50%",
          right: "15px",
          transform: "translateY(-50%)",
        }}
      >
        ›
      </button>
    </div>
  );
};

export default Carousel;
