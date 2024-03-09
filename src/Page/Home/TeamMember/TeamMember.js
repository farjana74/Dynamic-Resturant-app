import React from "react";
import "./TeamMember.css";
import team1 from "../../../images/team1.png";
import team2 from "../../../images/team2.png";
import team3 from "../../../images/team3.png";
const TeamMember = () => {
  return (
    <div className="container py-5">
      <div className="pt-5">
        <p className="text-center team-header pt-5">Our Team</p>
        <h5 className="text-center pb-5">Meet Our Team</h5>
      </div>
      <div className="row pb-5">
        <div className="col-md-4 text-center ">
          <img className="w-100" src={team1} alt="" />
          <div className="py-3 shadow">
            <h3>Cathy Anderson</h3>
            <h6>Chief Excuitive</h6>
          </div>
        </div>
        <div className="col-md-4 text-center ">
          <img className="w-100" src={team2} alt="" />
          <div className="py-3 shadow">
            <h3>Cathy Anderson</h3>
            <h6>Chief Excuitive</h6>
          </div>
        </div>
        <div className="col-md-4 text-center ">
          <img className="w-100" src={team3} alt="" />
          <div className="py-3 shadow">
            <h3>Cathy Anderson</h3>
            <h6>Chief Excuitive</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
