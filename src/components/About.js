import React from 'react';
import './About.css'; // Import the About.css file for styling

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About PG Listing Portal</h1>
        <p>Helping you find your perfect living space.</p>
      </div>
      <div className="about-content">
        <img 
          src="https://img.freepik.com/premium-vector/hostel-icon-vector-image-can-be-used-type-houses_120816-85491.jpg" 
          alt="PG Icon" 
          className="about-image" 
        />
        <div className="about-text">
          <p>
            Welcome to <strong>PG Listing Portal</strong> – your trusted companion in finding the perfect Paying Guest accommodation. 
            Whether you are a student, working professional, or a traveler, we provide verified listings across multiple cities, 
            complete with amenities, pricing, ratings, and real-time availability.
          </p>
          <p>
            Our goal is to simplify your PG search experience by offering a user-friendly platform where you can browse detailed room listings,
            compare prices, view photos, and make informed decisions from the comfort of your home.
          </p>
          <p>
            We are committed to offering transparency, trust, and convenience for both PG owners and seekers. 
            Start your journey to a better stay with <strong>PG Listing Portal</strong> today!
          </p>
        </div>
      </div>

      {/* A section with benefits or features */}
      <div className="about-benefits">
        <h2>Why Choose Us?</h2>
        <div className="benefits-list">
          <div className="benefit-item">
            <img 
              src="https://img.icons8.com/ios/452/checked.png" 
              alt="Verified Listings" 
              className="benefit-icon"
            />
            <p>Verified Listings</p>
          </div>
          <div className="benefit-item">
            <img 
              src="https://img.icons8.com/ios/452/price-tag.png" 
              alt="Affordable Prices" 
              className="benefit-icon"
            />
            <p>Affordable Prices</p>
          </div>
          <div className="benefit-item">
            <img 
              src="https://img.icons8.com/ios/452/map-pin.png" 
              alt="Multiple Locations" 
              className="benefit-icon"
            />
            <p>Multiple Locations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
