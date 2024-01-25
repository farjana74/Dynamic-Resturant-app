import React from "react";
import "./Banner.css";
import banner1 from "../../../images/baner.png";
import banner2 from "../../../images/baner1.png";
import banner3 from "../../../images/first-slider.png";
import Carousel from "react-bootstrap/Carousel";
const Banner = () => {
  return (
    <div className="banner-bg">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
        <div className="container">
            <div className="row banner-bg-1 d-flex justify-content-between align-items-center">
              <div className="col-md-6">
                <p>Best In Cafe</p>
                <h2>Different Spice For Different Taste</h2>
              </div>
              <div className="col-md-6">
              <img className="d-block w-100 h-50" src={banner1} alt="First slide" />
              </div>
            </div>
          </div>
         
        </Carousel.Item>
        <Carousel.Item>
          <div className="container">
            <div className="row banner-bg-1 d-flex justify-content-between align-items-center">
              <div className="col-md-6">
                <p>Best In Cafe</p>
                <h2>Different Spice For Different Taste</h2>
              </div>
              <div className="col-md-6">
                <img
                  className="d-block w-100 h-50"
                  src={banner2}
                  alt="Second slide"
                />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container">
            <div className="row banner-bg-1 d-flex justify-content-between align-items-center">
              <div className="col-md-6">
                <p>Best In Cafe</p>
                <h2>Different Spice For Different Taste</h2>
              </div>
              <div className="col-md-6">
                <img className=" w-100 " src={banner3} alt="Third slide" />
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
