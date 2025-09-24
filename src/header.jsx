import React from "react";
import TextType from './TextType';
//import GDGOCLogo from "./GDGOCLogo"; 

const Header = () => {
  return (
    <div style={styles.header}>
      <a href="/" aria-label="Home" style={styles.logoWrapper}>
        <img src="/GDGLogo.png" alt="GDG Logo" style={styles.logoImg} />
        <div style={styles.logoText}>
          <span style={styles.title}>Google Developer Groups</span>
          <span style={styles.subtitle}>
            <span style={{ color: "#1A73E8", fontWeight: 500 }}>On Campus</span>
            <span style={{ color: "#5f6368" }}> • Nirma University</span>
          </span>
        </div>
      </a>
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
  logoWrapper: {
    position: "fixed",  // fixed to viewport
    top: "10px",
    left: "10px",
    display: "flex",
    alignItems: "center",
    gap: "10px",        // space between logo and text
    zIndex: 20,
    textDecoration: "none",
  },
  logoImg: {
    height: "60px",
    width: "auto",
    marginTop: "20px",
  },
  logoText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "20px",
  },
  title: {
    color: "#202124",
    fontSize: "1.2rem",
    fontWeight: 500,
    lineHeight: 1.15,
    whiteSpace: "nowrap",
  },
  subtitle: {
    fontSize: "0.8rem",
    lineHeight: 1.2,
    whiteSpace: "nowrap",
  },
  text: {
    fontSize: "3rem", // you can change the font size here for color reference in TextType.jsx
  
    fontWeight: "bold",
    margin: 0,
  },
};

export default Header;