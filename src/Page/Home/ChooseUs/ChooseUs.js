import React from "react";
import choseLogo from "../../../images/exparience (1).png";
import choseLogo1 from "../../../images/5.png"
import choseLogo2 from "../../../images/6.png";
import "./ChooseUs.css"

const ChooseUs = () => {
  return (
    <div className="py-5">
      <div className="container pt-5 ">
      <div className="row gx-1 d-flex justify-content-between">
        <div className="col-md-5 ">
          <img className="w-100" src={choseLogo} alt="" />
        </div>
        <div className="col-md-6  p-3">
          <div>
            <h6 className="chose-header">About Us</h6>
          </div>
          <div>
            <h1 className="chose-des pb-3">Why We Are The Best</h1>
          </div>
          <p>
            Quis autem vel eum iure reprehenderit qui in evoluptate velit esse
            qua 
          </p>
          <p className="pb-2">
            molestiae consequatur, vel illum qui dolorem eum fugiat quvoluptas
            nulla pariatureaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </p>

          <div className=" row d-flex ">
            <div className="col-md-1">
                <img src={choseLogo1} alt="" />

            </div>
            <div className="col-md-8 ">
           <div className="ps-5">
           <h4 className="buffet-header">Buffet Service</h4>
                <h6 className="buffet-header1">Qariatureaque ipsa quae a illo inventore</h6>
                <h6 className="buffet-header1">veritatis et quasi architecto</h6>
           </div>

            </div>
          </div>
          <div className=" row pt-3 d-flex ">
            <div className="col-md-1">
                <img src={choseLogo2} alt="" />

            </div>
            <div className="col-md-8 ">
           <div className="ps-5">
           <h4 className="buffet-header">Online Booking</h4>
                <h6 className="buffet-header1">Qariatureaque ipsa quae a illo inventore</h6>
                <h6 className="buffet-header1">veritatis et quasi architecto</h6>
           </div>

            </div>
          </div>

          <div className="pt-4">
            <button className="choose-button">About Us</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ChooseUs;
