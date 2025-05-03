import React, { useState } from 'react';
import './RoomListing.css';

const rooms = [
  {
    id: 1,
    image: "https://4.imimg.com/data4/XP/JB/MY-29402471/pg-rooms.jpg",
    title: "Deluxe PG Room",
    price: "₹6,000/month",
    availability: "Available",
    rating: 4.5
  },
  {
    id: 2,
    image: "https://content.jdmagicbox.com/v2/comp/chennai/y3/044pxx44.xx44.201031134605.f1y3/catalogue/delight-women-s-hostel-iyyappanthangal-chennai-hostels-c4juf45ys5.jpg",
    title: "Women’s PG Delight",
    price: "₹5,500/month",
    availability: "Available",
    rating: 4.2
  },
  {
    id: 3,
    image: "https://img.theweek.in/content/dam/week/news/biz-tech/images/2018/7/27/pg-accomodation.jpg",
    title: "Executive PG Stay",
    price: "₹7,000/month",
    availability: "Only 2 left",
    rating: 4.7
  },
  {
    id: 4,
    image: "https://5.imimg.com/data5/AI/WE/GLADMIN-5593585/pg-rooms-500x500.jpg",
    title: "Spacious Sharing PG",
    price: "₹4,800/month",
    availability: "Available",
    rating: 4.0
  },
  {
    id: 5,
    image: "https://gsh-cdn.sgp1.cdn.digitaloceanspaces.com/assets/img/no-broker-mumbai/PRT555/room-on-rent-in-mumbai/pg-in-santacruz-east_1722852861.jpg",
    title: "Santacruz PG",
    price: "₹6,800/month",
    availability: "Only 1 left",
    rating: 4.6
  },
  {
    id: 6,
    image: "https://images.nobroker.in/images/ff8081815c271c21015c297888d13609/ff8081815c271c21015c297888d13609_35654_954815_medium.jpg",
    title: "Comfort Room",
    price: "₹5,000/month",
    availability: "Available",
    rating: 3.9
  },
  {
    id: 7,
    image: "https://images.jdmagicbox.com/v2/comp/chennai/w9/044pxx44.xx44.230622141501.e7w9/catalogue/pari-ladies-pg-accommodation-sholinganallur-chennai-hostels-lKc34iY117.jpg",
    title: "Pari Ladies PG",
    price: "₹5,200/month",
    availability: "Filling Fast",
    rating: 4.3
  },
  {
    id: 8,
    image: "https://content.jdmagicbox.com/v2/comp/chennai/z9/044pxx44.xx44.240426100139.q6z9/catalogue/swastik-stay-luxury-pg-for-men-chennai-hostels-nnek9xfvh4.jpg",
    title: "Swastik Stay - Men",
    price: "₹6,300/month",
    availability: "Available",
    rating: 4.4
  },
  {
    id: 9,
    image: "https://asset-cdn.stanzaliving.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:10/e_saturation:10/v1613119893/Website/CMS-Uploads/yxxv97g0xdwpidisus4d.jpg",
    title: "Stanza Premium Room",
    price: "₹8,000/month",
    availability: "Limited",
    rating: 4.8
  },
  {
    id: 10,
    image: "https://images.nobroker.in/images/8a9f844391b2d60c0191b2fa76bd0d88/8a9f844391b2d60c0191b2fa76bd0d88_53083_27060_medium.jpg",
    title: "Urban PG",
    price: "₹5,900/month",
    availability: "Available",
    rating: 4.1
  },
  {
    id: 11,
    image: "https://alexandro.in/image/mumbai/yourspace-parel/4.jpg",
    title: "YourSpace Parel",
    price: "₹7,500/month",
    availability: "Only 3 left",
    rating: 4.7
  },
  {
    id: 12,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeDyYXRYVE2K_VDrRTCF1WVAxB9NCI3swi5Q&s",
    title: "Elite PG",
    price: "₹6,200/month",
    availability: "Available",
    rating: 4.0
  },
];

const RoomListings = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    setPaymentSuccess(false);
    setFormData({ name: '', email: '', contact: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
    }, 3000); // simulate payment
  };

  return (
    <div className="room-listing-container">
      {!selectedRoom ? (
        <>
          <h1 className="title">Available Rooms</h1>
          <div className="room-grid">
            {rooms.map(room => (
              <div key={room.id} className="room-card" onClick={() => handleRoomSelect(room)}>
                <img src={room.image} alt={room.title} className="room-image" />
                <div className="room-info">
                  <h3>{room.title}</h3>
                  <p><strong>Price:</strong> {room.price}</p>
                  <p><strong>Availability:</strong> {room.availability}</p>
                  <p><strong>Rating:</strong> ⭐ {room.rating}/5</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="booking-form-container">
          <h2 className="form-title">Booking for {selectedRoom.title}</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input type="text" name="contact" placeholder="Contact Number" value={formData.contact} onChange={handleChange} required />
            <button type="submit" disabled={isProcessing}>
              {isProcessing ? 'Processing...' : 'Proceed to Payment'}
            </button>
          </form>
          {paymentSuccess && <p className="success-msg">✅ Booking Confirmed! Thank you.</p>}
          <button onClick={() => setSelectedRoom(null)}>← Back to Listings</button>
        </div>
      )}
    </div>
  );
};

export default RoomListings;
