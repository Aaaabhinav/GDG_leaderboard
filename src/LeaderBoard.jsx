// Leaderboard.jsx
import React from "react";
import Carousel from "./Carousel"; // Import the Carousel component

const Leaderboard = () => {
  // Example images for the carousel (replace with your actual image paths)
  const carouselImages = [
    'C:\Users\Abhinav Dixit\Desktop\gdg\leader_board\public\vite.svg',
    'https://via.placeholder.com/300x200?text=Image+2',
    'https://via.placeholder.com/300x200?text=Image+3',
  ];

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%", // Adjust width as needed
        height: "60%", // Adjust height as needed
        zIndex: 10,
        pointerEvents: "none",
        flexDirection: "row", // Ensure flex direction is row for side-by-side
      }}
    >
      {/* Left Div */}
      <div
        style={{
          width: "45%",
          height: "90%",
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          pointerEvents: "auto",
          padding: "20px", // Add some padding for content
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3>Left Leaderboard</h3>
        <p>Player 1: 1000 points</p>
        <p>Player 2: 950 points</p>
      </div>

      {/* Right Section Container (holds carousel and text below) */}
      <div
        style={{
          width: "45%",
          height: "90%", // This now refers to the total height available for carousel + text
          backgroundColor: "white", // Background for the whole right container
          borderRadius: "20px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          pointerEvents: "auto",
          display: "flex",
          flexDirection: "column", // Stack carousel and text vertically
          padding: "20px", // Padding for the whole right section
          justifyContent: "space-between", // Distribute space between carousel and text
        }}
      >
        {/* Carousel in the right section */}
        <div style={{ flexGrow: 1, minHeight: 0 }}> {/* flexGrow allows carousel to take available space */}
          <Carousel images={carouselImages} />
        </div>

        {/* Text below the right section */}
        <div style={{ textAlign: "center", marginTop: "15px" }}>
          <p className="text-gray-700 text-sm">
            This is some important information or an announcement related to the carousel or the leaderboard.
            Stay tuned for updates!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;