import React from "react";
import TextType from './TextType';
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <a href="/" aria-label="Home" className="logo-wrapper">
        <img src="/GDGLogo.png" alt="GDG Logo" className="logo-img" />
        <div className="logo-text">
          <span className="title">Google Developer Groups</span>
          <span className="subtitle">
            <span style={{ color: "#1A73E8", fontWeight: 500 }}>On Campus</span>
            <span style={{ color: "#5f6368" }}> • Nirma University</span>
          </span>
        </div>
      </a>
      <div className="text-type">
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

export default Header;
