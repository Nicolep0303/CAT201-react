import React from "react";
import "./Header.css";

export const Index = () => {
  return (
    <div className="index">
      <div className="div">
        <div className="navbar">
          <div className="text-wrapper">Home</div>
          <div className="text-wrapper-2">About Us</div>
          <div className="text-wrapper-2">Services</div>
          <div className="text-wrapper-2">Our Team</div>
          <div className="text-wrapper-2">Contact Us</div>
        </div>
        <img
          className="frame"
          alt="Frame"
          src="https://cdn.animaapp.com/projects/65988b9900be5f53b734f52e/releases/6598d602f8c0a7ce7bd371d1/img/frame-3.svg"
        />
        <div className="group">
          <div className="text-wrapper-3">TechVista</div>
          <img
            className="TV"
            alt="Tv"
            src="https://cdn.animaapp.com/projects/65988b9900be5f53b734f52e/releases/659a4abf00be5f53b734f7e2/img/tv-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;