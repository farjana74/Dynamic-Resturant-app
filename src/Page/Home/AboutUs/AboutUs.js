import React from "react";
import about1 from "../../../images/1 (1).png";
import about2 from "../../../images/2 (1).png";
import about3 from "../../../images/3 (1).png";
import about4 from "../../../images/4 (1).png";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div className="pt-5">
    <div className="container py-5">
      <div className="row gx-5">
        <div className="col-xl-3 col-md-6 col-lg-3 col-sm-6 mb-4 border p-3 ">
          <div className="text-center">
            <img className="about-img" src={about1} alt="" />
          </div>
          <div className="py-3">
            <h3 className="about-header">100% Swiss Quality</h3>
          </div>
          <div>
            <p className="about-des">
              Lorem ipsum dol consectetur adipiscing elit, sed eiusmod tempor
              incididunt ut labore dolore magna aliqua
            </p>
          </div>
          <p className="text-center">Discover more</p>
        </div>
        <div className="col-xl-3 col-md-6 col-lg-3 col-sm-6 mb-4 p-3 shadow">
          <div className="text-center">
            <img className="about-img" src={about2} alt="" />
          </div>
          <div className="py-3">
            <h3 className="about-header">100% Swiss Quality</h3>
          </div>
          <div>
            <p className="about-des">
              Lorem ipsum dol consectetur adipiscing elit, sed eiusmod tempor
              incididunt ut labore dolore magna aliqua
            </p>
          </div>
          <p className="text-center">Discover more</p>
        </div>
        <div className="col-xl-3 col-md-6 col-lg-3 col-sm-6 mb-4 p-3 border">
          <div className="text-center">
            <img className="about-img" src={about3} alt="" />
          </div>
          <div className="py-3">
            <h3 className="about-header">100% Swiss Quality</h3>
          </div>
          <div>
            <p className="about-des">
              Lorem ipsum dol consectetur adipiscing elit, sed eiusmod tempor
              incididunt ut labore dolore magna aliqua
            </p>
          </div>
          <p className="text-center">Discover more</p>
        </div>
        <div className="col-xl-3 col-md-6 col-lg-3 col-sm-6 mb-4 p-3 shadow">
          <div className="text-center">
            <img className="about-img" src={about4} alt="" />
          </div>
          <div className="py-3">
            <h3 className="about-header">100% Swiss Quality</h3>
          </div>
          <div>
            <p className="about-des">
              Lorem ipsum dol consectetur adipiscing elit, sed eiusmod tempor
              incididunt ut labore dolore magna aliqua
            </p>
          </div>
          <p className="text-center">Discover more</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
