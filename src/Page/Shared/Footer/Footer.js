import React from 'react';
import "./Footer.css";
import footerLogo from "../../../images/logo-white.png"
const Footer = () => {
    return (
        <div className='footer-bg'>
            <div className='container'>
            <div className='row py-5 d-flex align-content-center'>
                <div className="col-md-4 ">
                    <img className='py-2' src={footerLogo} alt="" />
                    <hr className='text-white w-50 ' />
                    <h5 className='text-white m-0'>Lorem ipsum dolor sit consectetur, ame adipiscing elit, sed do</h5>
                    
                </div>
                <div className="col-md-3">
                    <h4 className='py-3 text-white'>Quick Links</h4>
                    <hr className='text-white w-50 m-0 ' />

                </div>
                <div className="col-md-3">
                <h4 className='py-3 text-white'>Instagram</h4>
                    <hr className='text-white w-50 m-0 ' />
                </div>
                <div className="col-md-2">
                <h4 className='py-3 text-white'>Subscribe</h4>
                    <hr className='text-white w-50 m-0 ' />
                </div>

            </div>
            </div>

            
        </div>
    );
};

export default Footer;