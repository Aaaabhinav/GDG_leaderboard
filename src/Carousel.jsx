// Carousel.jsx
import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) {
    return <div className="p-4 text-center text-gray-500">No images to display.</div>;
  }

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full flex items-center justify-center">
            <img src={image} alt={`Slide ${index}`} className="max-w-full max-h-full object-contain" />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full m-2 opacity-75 hover:opacity-100 focus:outline-none"
      >
        &#9664; {/* Left arrow */}
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full m-2 opacity-75 hover:opacity-100 focus:outline-none"
      >
        &#9654; {/* Right arrow */}
      </button>

      {/* Dots Indicator (Optional) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-500'} focus:outline-none`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;