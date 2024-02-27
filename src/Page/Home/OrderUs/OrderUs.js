import React from "react";
import googlebg from "../../../images/apple.png";
import playStore from "../../../images/play-store.png";
import "./OrderUs.css";
import app1 from "../../../images/app-1.png";
import app2 from "../../../images/app-2.png";

const OrderUs = () => {
  return (
    <div className="container order-bg py-5 position-relative">
      <div className="row pt-2 ps-5 gy-5">
        <div className="col-md-7">
          <h2 className="order-header">Simple Way to Order Your Food </h2>
          <p className="py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eius-
            mod tempor incididunt ut labore et dolore magna aliqua. Q ipsum
            suspendisse ultrices gravida. Risus commodo viverra maeceas accumsan
            lacus vel facilisis
          </p>
          <div className="d-flex  align-items-center">
            <div className="pe-5">
              <img className="w-100" src={googlebg} alt="" />
            </div>
            <div>
              <img className="w-100" src={playStore} alt="" />
            </div>
          </div>
        </div>
        <div className="col-md-5 m-0 d-flex">
          <div className=" pe-3 app-image ">
            <img className="w-100 app-first  " src={app1} alt="" />
          </div>
          <div>
            <img className="w-100 app-second" src={app2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderUs;
