
import React from "react";
import './Footer.css';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>

        <div className="footer-section">
          <p>
            <a href="https://www.facebook.com/login/">Facebook</a> |
            <a href="https://twitter.com/i/flow/login"> Twitter</a> |
            <a href="https://www.instagram.com/accounts/login/"> Instagram</a>
          </p>
        </div>

        <div className="footer-section">
          <p>
            <a href="/contact">Contact Us</a> | Email: your@email.com | Phone: +256259
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


