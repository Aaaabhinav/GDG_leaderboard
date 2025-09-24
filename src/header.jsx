import React from "react";
import TextType from './TextType';

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
    position: "fixed", // ✅ changed from absolute to fixed
    top: 0,
    left: 0,
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100, // keep it above everything
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)", // optional shadow
  },
  logoWrapper: {
    position: "fixed",
    top: "10px",
    left: "10px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    zIndex: 200,
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
    fontSize: "3rem",
    fontWeight: "bold",
    margin: 0,
  },
};

export default Header;
