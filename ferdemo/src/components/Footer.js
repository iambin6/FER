import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h4 className="h5 mb-3 text-info">About Us</h4>
            <p className="small text-muted">Your company description goes here. Providing quality food and services since 2024.</p>
          </div>
          <div className="col-md-4 mb-4 text-center">
            <h4 className="h5 mb-3 text-info">Quick Links</h4>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-decoration-none text-muted small">Home</a></li>
              <li><a href="#about" className="text-decoration-none text-muted small">About</a></li>
              <li><a href="#services" className="text-decoration-none text-muted small">Services</a></li>
              <li><a href="#contact" className="text-decoration-none text-muted small">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-4 text-end">
            <h4 className="h5 mb-3 text-info">Follow Us</h4>
            <ul className="list-unstyled">
              <li><a href="#facebook" className="text-decoration-none text-muted small">Facebook</a></li>
              <li><a href="#twitter" className="text-decoration-none text-muted small">Twitter</a></li>
              <li><a href="#instagram" className="text-decoration-none text-muted small">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="border-top border-secondary mt-4 pt-3 text-center">
          <p className="mb-0 small text-muted">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
