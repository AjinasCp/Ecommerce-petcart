import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <h3>peTCaRt</h3>
          <p>
          Ymca Calicut,PetCart
            <br />
            Email: ajinascp111@gmail.com
            <br />
            Phone: +91 9072894916
          </p>
        </div>
        <div className="footer-middle">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li><a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="https://twitter.com"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://www.instagram.com/ajinaas_/">instagram<i className="fab fa-instagram"></i></a></li>
            <li><a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} PetCart. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
