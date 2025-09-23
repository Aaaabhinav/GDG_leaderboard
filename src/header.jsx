import React from "react";
import TextType from './TextType';

const Header = () => {
  return (
    <div style={styles.header}>
      <div style={styles.text}>
        <TextType 
          text={["Google Cloud Camplain 25 is Live!"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />
      </div>
    </div>
  );
};

const styles = {
  header: {
    width: "100vw",
    height: "110px",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#ffffff", // corrected to pure white
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  text: {
    fontSize: "3rem", // you can change the font size here for color reference in TextType.jsx
  
    fontWeight: "bold",
    margin: 0,
  },
};

export default Header;