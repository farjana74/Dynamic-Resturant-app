import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="service-bg pt-5">
      <div className="container">
        <div className="row section-height d-flex justify-content-between align-items-center">
          <div className="col-md-6">
            <h2 className="services-header">Stay Informed About Special Offers</h2>
            <p className="services-des">For Exclusive Deals, Coupons, News and More!</p>
          </div>
          <div className="col-md-6 text-center">
           <div>
           <input className="service-input" type="text" name="" id="" placeholder="Enter Your Email" />
            <button className="service-button">Search</button>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
