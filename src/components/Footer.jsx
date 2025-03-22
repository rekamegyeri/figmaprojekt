import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <img src="./public/assets/icons/facebook.svg" className="icon" />
        <img src="./public/assets/icons/instagram.svg" className="icon" />
        <img src="./public/assets/icons/linkedin.svg" className="icon" />
        <img src="./public/assets/icons/twitter.svg" className="icon" />
      </div>
      <p className="copyright">Copyright ©2020 All rights reserved</p>
    </footer>
  );
};

export default Footer;
