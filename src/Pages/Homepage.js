import React from "react";
import "../App.css"
import Wallpaper from "../Asets/Wallpaper.jpg";
import Logo from "../Asets/BankImage.png";   

const Homepage = () => {
  return (
    <div className="hero-container">
      <img src={Wallpaper} alt="Background" className="hero-image" />

      <div className="hero-left-content">
        <div className="bank-title">
          <img src={Logo} alt="Bank Logo" className="bank-logo" style={{color:"white"}} />
          <h1 className="bank-name">TELANGANA BANK</h1>
        </div>

        <h2 className="tagline">Experience Banking Differently</h2>

        <div className="hero-buttons">
          <button className="primary-btn">Mobile App</button>
          <button className="secondary-btn">NetBanking</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

