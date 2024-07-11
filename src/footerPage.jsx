import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <img src="src/bpit.jpg" alt="" />
        <p>Get connected with us on social networks!</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-google"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-column">
          <h6>BHAGWAN PARSHURAM INSTITUTE OF TECHNOLOGY</h6>
          <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        {/* <div className="footer-column">
          <h6>PRODUCTS</h6>
          <ul>
            <li><a href="#">MDBootstrap</a></li>
            <li><a href="#">MDWordPress</a></li>
            <li><a href="#">BrandFlow</a></li>
            <li><a href="#">Bootstrap Angular</a></li>
          </ul>
        </div> */}
        <div className="footer-column">
          <h6>USEFUL LINKS</h6>
          <ul>
            <li><a href="#">Your Account</a></li>
            <li><a href="#">Become an Affiliate</a></li>
            <li><a href="#">Shipping Rates</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h6>CONTACT</h6>
          <ul>
            <li><i className="fas fa-home"></i> New York, NY 10012, US</li>
            <li><i className="fas fa-envelope"></i> info@example.com</li>
            <li><i className="fas fa-phone"></i> + 01 234 567 88</li>
            <li><i className="fas fa-print"></i> + 01 234 567 89</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2020 Copyright: BPIT.COM</p>
      </div>
    </footer>
  );
};

export default Footer;
