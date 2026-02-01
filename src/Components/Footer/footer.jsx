import React from 'react';
import './footer.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">


        <div className="footer-brand">
          <h2 className='footer-logo'>Connectify</h2>
          <p>Secure, high-quality video meetings for teams and individuals.</p>
          <p>Connect, collaborate, and communicate from anywhere.</p>
        </div>
        <div className="social">
          <h4>Follow Us</h4>
        <div className="social-icons">
          <div className="social-item">
            <i className="bx bxl-facebook-circle"></i>
            <span>Facebook</span>
          </div>

          <div className="social-item">
            <i className="bx bxl-instagram-alt"></i>
            <span>Instagram</span>
          </div>

          <div className="social-item">
            <i className="bx bxl-twitter"></i>
            <span>Twitter</span>
          </div>
        </div>
        </div>



        <div className="footer-links">
          <h4>Links</h4>
          <ul>
            <li>New Meeting</li>
            <li>Join Meeting</li>
          
            <li>Screen Sharing</li>
            <li>Recording</li>
          </ul>
        </div>




        <div className="footer-links">
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact Support</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Video Chat. All rights reserved.</p>
        <p>Made with ❤️ for seamless communication.</p>
      </div>
    </footer>
  );
}

export default Footer;
