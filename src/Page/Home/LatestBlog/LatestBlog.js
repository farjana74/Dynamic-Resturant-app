import React from "react";
import "./LatestBlog.css";
import latestBlog1 from "../../../images/blog1.png";
import latestBlog2 from "../../../images/blog2.png";
import latestBlog3 from "../../../images/blog3.png";

const LatestBlog = () => {
  return (
    <div className="blog-bg mt-5">
      <div className="container py-5">
        <p className="blog-header pt-5">News & Blog</p>
        <h1 className="blog-second-header pb-5">Latest Blog</h1>
        <div className="row">
          <div className="col-md-4 ">
            <div className="shadow-lg">
            <img className="w-100" src={latestBlog1} alt="" />
            <div className="p-3 blog-details">
            <h2 className="blog-image-header py-2">New Restaurant Town Our Ple Award Contract</h2>
            <p className="pb-2">
              Drive your business and manage risks with a global industry
              leader.
            </p>
            <hr  className=""/>
            <div className="d-flex justify-content-between align-content-center">
              <div>Aug 1, 2023 - Comments</div>
              <div>
                <p>Read More</p>
              </div>
            </div>
            </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="shadow-lg">
            <img className="w-100" src={latestBlog2} alt="" />
            <div className="p-3 blog-details">
            <h2 className="blog-image-header py-2">New Restaurant Town Our Ple Award Contract</h2>
            <p className="pb-2">
              Drive your business and manage risks with a global industry
              leader.
            </p>
            <hr  className=""/>
            <div className="d-flex justify-content-between align-content-center">
              <div>Aug 1, 2023 - Comments</div>
              <div>
                <p>Read More</p>
              </div>
            </div>
            </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="shadow-lg">
            <img className="w-100" src={latestBlog3} alt="" />
            <div className="p-3 blog-details">
            <h2 className="blog-image-header py-2">New Restaurant Town Our Ple Award Contract</h2>
            <p className="pb-2">
              Drive your business and manage risks with a global industry
              leader.
            </p>
            <hr  className=""/>
            <div className="d-flex justify-content-between align-content-center">
              <div>Aug 1, 2023 - Comments</div>
              <div>
                <p>Read More</p>
              </div>
            </div>
            </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
