import React from "react";
import PixelBlast from "./PixelBlast";
import Header from "./Header";
import Leaderboard from "./Leaderboard"; // Import the Leaderboard component

const PixelBlastSection = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#cd2121ff",
      }}
    >
      <PixelBlast
        variant="circle"
        pixelSize={6}
        color="#B19EEF"
        patternScale={3}
        patternDensity={1.2}
        pixelSizeJitter={0.5}
        enableRipples
        rippleSpeed={0.4}
        rippleThickness={0.12}
        rippleIntensityScale={1.5}
        liquid
        liquidStrength={0.12}
        liquidRadius={1.2}
        liquidWobbleSpeed={5}
        speed={0.6}
        edgeFade={0}
        transparent
      />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <PixelBlastSection />
      <Leaderboard /> {/* Add the Leaderboard component here */}
    </div>
  );
}

export default App;