import React, { useState } from "react";
import Carousel from "./Carousel";
import "./Leaderboard.css";

const Leaderboard = () => {
  const carouselImages = ["./one.jpg", "./two.jpg"];
  const [totalParticipants] = useState(120);
  const [arcadeCompleted] = useState(85);
  const [skilledBadges] = useState(50);

  return (
    <div className="leaderboard-wrapper">
      {/* Left Panel */}
      <div className="leaderboard-panel">
        <h3 style={{ marginBottom: "30px", fontSize: "24px", fontWeight: "bold", marginTop: "-10px" }}>
          Leaderboard
        </h3>
        <div className="stats-container">
          <div className="statCard">
            <h4>Total Participants</h4>
            <div>{totalParticipants}</div>
          </div>
          <div className="statCard">
            <h4>Participants completed Arcade</h4>
            <div>{arcadeCompleted}</div>
          </div>
          <div className="statCard">
            <h4>Earned Skilled Badges</h4>
            <div>{skilledBadges}</div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="leaderboard-panel">
        <div className="carousel-container">
          <Carousel images={carouselImages} />
        </div>
        <div className="carousel-text">
          Last year rewards included exclusive merchandise, certificates, and special recognition for top performers!
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
