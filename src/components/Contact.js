import React from 'react';
import './Contact.css'; // Import the Contact.css file for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out to us for any inquiries or feedback.</p>
      </div>

      <div className="contact-details">
        <div className="contact-info">
          <h2>Our Office</h2>
          <p><strong>PG Listing Portal</strong></p>
          <p>123 Main Street,</p>
          <p>Chennai, Tamil Nadu, 600100</p>
          <p>India</p>
          <p><strong>Phone:</strong> +91 123 456 7890</p>
          <p><strong>Email:</strong> contact@pglisting.com</p>
        </div>

        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Your message" rows="4"></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>

      <div className="contact-map">
        <h2>Our Location</h2>
        <img 
          src="https://www.pgchoice.com/uploads/property/medium/PG_Hostel_7699195182_pg.webp"
          alt="PG Hostel Location"
          width="100%"
          height="auto"
        />
      </div>

      <div className="contact-social">
        <h2>Follow Us</h2>
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios/452/facebook.png" alt="Facebook" className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios/452/twitter.png" alt="Twitter" className="social-icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios/452/instagram-new.png" alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios/452/linkedin.png" alt="LinkedIn" className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
