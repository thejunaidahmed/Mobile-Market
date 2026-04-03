import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer">
      <div className="logo">TheMobileMarket</div>

      <div className="links">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <div className="socials">
        <a href="#"><FaFacebook /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaLinkedin /></a>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} Shopinity. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
