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
        <h3 style={{ marginBottom: "30px", fontSize: "24px", fontWeight: "bold", marginTop: "-10px" }}>Leaderboard</h3>

         {/* Stats Container */}
         <div style={{ 
           display: "flex", 
           flexDirection: "column", 
           gap: "15px", 
           width: "100%",
           padding: "0 10px",
           flexGrow: 1,
           justifyContent: "space-evenly"
         }}>
          {/* Total Participants Box */}
          <div className="statCard">
             <h4 style={{ 
               margin: "0 0 8px 0", 
               fontSize: "16px", 
               fontWeight: "500",
               color: "#202124"
             }}>
               Total Participants
             </h4>
             <div style={{ 
               fontSize: "24px", 
               fontWeight: "bold", 
               color: "#0C6BF0"
             }}>
               {totalParticipants}
             </div>
           </div>

           {/* Arcade Completed Box */}
          <div className="statCard">
             <h4 style={{ 
               margin: "0 0 8px 0", 
               fontSize: "16px", 
               fontWeight: "500",
               color: "#202124"
             }}>
               Participants completed Arcade
             </h4>
             <div style={{ 
               fontSize: "24px", 
               fontWeight: "bold", 
               color: "#0C6BF0"
             }}>
               {arcadeCompleted}
             </div>
           </div>

           {/* Skilled Badges Box */}
          <div className="statCard">
             <h4 style={{ 
               margin: "0 0 8px 0", 
               fontSize: "16px", 
               fontWeight: "500",
               color: "#202124"
             }}>
               Earned Skilled Badges
             </h4>
             <div style={{ 
               fontSize: "24px", 
               fontWeight: "bold", 
               color: "#0C6BF0",
             }}>
               {skilledBadges}
             </div>
           </div>
         </div>

        
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
