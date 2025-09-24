// Leaderboard.jsx
import React, { useState } from "react";
import Carousel from "./Carousel"; // Import the Carousel component

const Leaderboard = () => {
  // Example images for the carousel
  const carouselImages = ["./game_section.png", "./best.jpg"];

  // Define values in state (can be updated dynamically)
  const [totalParticipants, setTotalParticipants] = useState(120);
  const [arcadeCompleted, setArcadeCompleted] = useState(85);
  const [skilledBadges, setSkilledBadges] = useState(50);

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
        width: "80%",
        height: "60%",
        zIndex: 10,
        pointerEvents: "none",
        flexDirection: "row",
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
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          color: "black",
          alignItems: "center",
        }}
      >
        <h3 style={{ marginBottom: "20px" }}>Leaderboard</h3>

        <p style={{ fontSize: "16px", margin: "10px 0" }}>
          Total Participants: <strong>{totalParticipants}</strong>
        </p>
        <p style={{ fontSize: "16px", margin: "10px 0" }}>
          Participants completed Arcade: <strong>{arcadeCompleted}</strong>
        </p>
        <p style={{ fontSize: "16px", margin: "10px 0" }}>
          Earned skilled badges: <strong>{skilledBadges}</strong>
        </p>

        
      </div>

      {/* Right Section Container */}
      <div
        style={{
          width: "45%",
          height: "90%",
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          pointerEvents: "auto",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          justifyContent: "space-between",
        }}
      >
        {/* Carousel */}
        <div style={{ flexGrow: 1, minHeight: 0 }}>
          <Carousel images={carouselImages} />
        </div>

        {/* Text below carousel */}
        <div style={{ textAlign: "center", marginTop: "15px" }}>
          <p className="text-gray-700 text-sm">
            This is some important information or an announcement related to the
            carousel or the leaderboard. Stay tuned for updates!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
