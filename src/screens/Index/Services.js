import React from "react";
import "./Services.css";

export const Index = () => {
  return (
    <div className="index">
      <div className="frame-wrapper">
        <div className="frame">
          <div className="text-wrapper">Our Services</div>
          <div className="div">
            <div className="service">
              <div className="text-wrapper-2">Managed Services</div>
              <p className="we-ll-manage-all-of">
                We’ll manage all of your IT
                <br />
                services for a flat-rate fee
              </p>
              <img
                className="business-concept"
                alt="Business concept"
                src="https://cdn.animaapp.com/projects/65988b9900be5f53b734f52e/releases/6598ce4a00be5f53b734f593/img/business-concept-with-wooden-blocks-with-icons-green-plant-1.png"
              />
            </div>
            <div className="service-2">
              <div className="data-backup-recovery">Data Backup &amp; Recovery</div>
              <p className="prevent-the">
                Prevent the unexpected
                <br />
                from rulning your company
              </p>
              <img
                className="cloud-drawer"
                alt="Cloud drawer"
                src="https://cdn.animaapp.com/projects/65988b9900be5f53b734f52e/releases/6598ce4a00be5f53b734f593/img/cloud-drawer-2.png"
              />
            </div>
            <div className="service-3">
              <div className="text-wrapper-3">Cloud Computing</div>
              <p className="our-solutions-are">
                Our solutions are fully scalable
                <br />
                and available for a flat-rate fee
              </p>
              <img
                className="rectangle"
                alt="Rectangle"
                src="https://cdn.animaapp.com/projects/65988b9900be5f53b734f52e/releases/6598ce4a00be5f53b734f593/img/rectangle-3@2x.png"
              />
            </div>
            <div className="service-4">
              <div className="text-wrapper-4">Virtualization</div>
              <p className="stop-buying-servers">
                Stop buying servers and
                <br />
                optimize the pnes you have
              </p>
              <img
                className="rectangle"
                alt="Rectangle"
                src="https://cdn.animaapp.com/projects/65988b9900be5f53b734f52e/releases/6598ce4a00be5f53b734f593/img/rectangle-3-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;