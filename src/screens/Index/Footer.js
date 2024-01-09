import React from "react";
import "./Footer.css";
import { waitForElementToBeRemoved } from "@storybook/testing-library";

export const Index = () => {
  return (
    <div className="index">
      <div className="div">
        <p className="we-will-further">
          We will further support you on reaching
          <br />
          YOUR stated TARGETS within your
          <br />
          journey to success
        </p>
        <img
          className="frame"
          alt="Frame"
          src="https://cdn.animaapp.com/projects/65988b9900be5f53b734f52e/releases/659b6193ea1c0897b96a645f/img/frame-4.svg"
        />
        <div className="group">
          <div className="text-wrapper">TechVista</div>
          <img
            className="TV"
            alt="Tv"
            src="https://cdn.animaapp.com/projects/65988b9900be5f53b734f52e/releases/659a4abf00be5f53b734f7e2/img/tv-1@2x.png"
          />
        </div>
        <div className="text-wrapper-2">Contact Info</div>
        <p className="p">
          No.30 Jalan Cassia Selatan 1/3, Taman Perindustrian Batu Kawan, Bandar Cassia, 14110, Pulau Pinang, Malaysia.
        </p>
        <div className="place-marker-wrapper">
          <img
            className="place-marker"
            alt="Place marker"
            src="https://cdn.animaapp.com/projects/65988b9900be5f53b734f52e/releases/6598f7cfd85112d634558be7/img/place-marker@2x.png"
          />
        </div>
        <div className="text-wrapper-3">+604 331 3030</div>
        <div className="phone-wrapper">
          <img
            className="phone"
            alt="Phone"
            src="https://cdn.animaapp.com/projects/65988b9900be5f53b734f52e/releases/6598f7cfd85112d634558be7/img/phone@2x.png"
          />
        </div>
        <div className="text-wrapper-4">enquiry@techvista.com</div>
        <div className="email-wrapper">
          <img
            className="email"
            alt="Email"
            src="https://cdn.animaapp.com/projects/65988b9900be5f53b734f52e/releases/6598f7cfd85112d634558be7/img/email@2x.png"
          />
        </div>
        <div className="text-wrapper-5">Copyright © 2024 TechVista_CAT201_GROUP_30</div>
      </div>
    </div>
  );
};

export default Footer;